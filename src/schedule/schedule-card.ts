import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { liquidGlassStyles } from '../styles';

interface Lesson {
  start: string;
  end: string;
  subject: string;
  room?: string;
  homework?: string;
}

export class LiquidSchoolScheduleCard extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: any;
  @state() private _activeTab: 'today' | 'tomorrow' = 'today';
  @state() private _lessons: Lesson[] = [];

  static styles = [
    liquidGlassStyles,
    css`
      .lesson-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }
      .lesson-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .lesson-time {
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0.75;
        margin-right: 10px;
      }
      .lesson-name {
        font-weight: 600;
        flex: 1;
      }
      .badge-room {
        background: rgba(255, 255, 255, 0.45);
        padding: 2px 8px;
        border-radius: 8px;
        font-size: 0.75rem;
        font-weight: 600;
      }
      .homework-box {
        font-size: 0.8rem;
        color: var(--text-secondary);
        background: rgba(0, 0, 0, 0.03);
        padding: 4px 8px;
        border-radius: 6px;
        margin-top: 4px;
      }
      .break-item {
        display: flex;
        align-items: center;
        padding: 4px 14px;
        margin-bottom: 8px;
        font-size: 0.8rem;
        color: var(--text-secondary);
      }
      .break-line {
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.4);
        margin: 0 10px;
      }
    `
  ];

  public static async getConfigElement() {
    return document.createElement('liquid-school-schedule-card-editor');
  }

  public setConfig(config: any): void {
    if (!config.entity) {
      throw new Error('Укажите сущность расписания (sensor.* или calendar.*)');
    }
    this._config = config;
  }

  public willUpdate(changedProps: Map<string, any>) {
    if (changedProps.has('hass') && this.hass && this._config?.entity) {
      this._updateScheduleData();
    }
  }

  private async _updateScheduleData() {
    const entityId = this._config.entity;

    if (entityId.startsWith('sensor.')) {
      const stateObj = this.hass.states[entityId];
      if (!stateObj) return;

      const attrName = this._activeTab === 'today' 
        ? (this._config.today_attribute || 'lessons_today')
        : (this._config.tomorrow_attribute || 'lessons_tomorrow');

      const rawLessons = stateObj.attributes[attrName] || [];
      this._lessons = rawLessons.map((l: any) => ({
        start: l.start_time || l.start || '',
        end: l.end_time || l.end || '',
        subject: l.subject || l.name || 'Урок',
        room: l.room || l.classroom || '',
        homework: l.homework || ''
      }));
      return;
    }

    if (entityId.startsWith('calendar.')) {
      const targetDate = new Date();
      if (this._activeTab === 'tomorrow') targetDate.setDate(targetDate.getDate() + 1);
      targetDate.setHours(0, 0, 0, 0);

      const endDate = new Date(targetDate);
      endDate.setHours(23, 59, 59, 999);

      try {
        const url = `calendars/${entityId}?start=${targetDate.toISOString()}&end=${endDate.toISOString()}`;
        const data: any = await this.hass.callApi('GET', url);
        this._lessons = (data || []).map((e: any) => ({
          start: this._formatTime(e.start.dateTime || e.start.date),
          end: this._formatTime(e.end.dateTime || e.end.date),
          subject: e.summary,
          room: e.location || '',
          homework: e.description || ''
        }));
      } catch (err) {
        console.error('Ошибка загрузки календаря', err);
      }
    }
  }

  private _formatTime(isoStr: string) {
    if (!isoStr.includes('T')) return isoStr;
    const d = new Date(isoStr);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  private _calcBreak(endStr: string, nextStartStr: string): number {
    const parseMins = (t: string) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };
    if (!endStr.includes(':') || !nextStartStr.includes(':')) return 0;
    const diff = parseMins(nextStartStr) - parseMins(endStr);
    return diff > 0 ? diff : 0;
  }

  private _setTab(tab: 'today' | 'tomorrow') {
    this._activeTab = tab;
    this._updateScheduleData();
  }

  render() {
    if (!this._config || !this.hass) return html``;

    return html`
      <div class="glass-card">
        <div class="glass-header">
          <div class="glass-title">${this._config.title || 'Школьное расписание'}</div>
          <div class="glass-chip-nav">
            <button
              class="glass-chip-btn ${this._activeTab === 'today' ? 'active' : ''}"
              @click=${() => this._setTab('today')}
            >
              Сегодня
            </button>
            <button
              class="glass-chip-btn ${this._activeTab === 'tomorrow' ? 'active' : ''}"
              @click=${() => this._setTab('tomorrow')}
            >
              Завтра
            </button>
          </div>
        </div>

        <div class="schedule-list">
          ${this._lessons.length === 0 ? html`
            <div style="text-align: center; padding: 20px; opacity: 0.6;">Нет уроков на этот день</div>
          ` : this._lessons.map((lesson, index) => {
            const nextLesson = this._lessons[index + 1];
            const breakMins = nextLesson ? this._calcBreak(lesson.end, nextLesson.start) : 0;

            return html`
              <div class="glass-item">
                <div class="lesson-row">
                  <div class="lesson-top">
                    ${lesson.start ? html`<span class="lesson-time">${lesson.start} -${lesson.end}</span>` : ''}
                    <span class="lesson-name">${lesson.subject}</span>
                    ${lesson.room ? html`<span class="badge-room">${lesson.room}</span>` : ''}
                  </div>
                  ${lesson.homework ? html`
                    <div class="homework-box">Д/З: ${lesson.homework}</div>
                  ` : ''}
                </div>
              </div>

              ${breakMins > 0 && this._config.show_breaks !== false ? html`
                <div class="break-item">
                  <span class="break-line"></span>
                  <span>Перемена ${breakMins} мин</span>
                  <span class="break-line"></span>
                </div>
              ` : ''}
            `;
          })}
        </div>
      </div>
    `;
  }
}
