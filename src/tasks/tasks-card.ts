import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { liquidGlassStyles } from '../styles';

interface TodoItem {
  id: string;
  summary: string;
  status: 'needs_action' | 'completed';
  due?: string;
}

export class LiquidDailyTasksCard extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: any;
  @state() private _items: TodoItem[] = [];

  static styles = [
    liquidGlassStyles,
    css`
      .task-checkbox {
        appearance: none;
        width: 22px;
        height: 22px;
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 6px;
        outline: none;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
        display: grid;
        place-content: center;
        margin-right: 12px;
        transition: all 0.2s ease;
      }
      .task-checkbox:checked {
        background: var(--accent-green);
        border-color: var(--accent-green);
      }
      .task-checkbox:checked::before {
        content: "✓";
        color: white;
        font-weight: 900;
        font-size: 14px;
      }
      .task-details {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .task-title {
        font-size: 0.95rem;
        font-weight: 500;
      }
      .task-title.done {
        text-decoration: line-through;
        opacity: 0.6;
      }
      .task-due {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }
      .progress-container {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .progress-bar {
        height: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #38bdf8, #34d399);
        transition: width 0.4s ease;
      }
    `
  ];

  public static async getConfigElement() {
    return document.createElement('liquid-daily-tasks-card-editor');
  }

  public setConfig(config: any): void {
    if (!config.entity) {
      throw new Error('Выберите сущность списка задач (todo.*)');
    }
    this._config = config;
  }

  public willUpdate(changedProps: Map<string, any>) {
    if (changedProps.has('hass') && this.hass && this._config?.entity) {
      const oldHass = changedProps.get('hass');
      if (!oldHass || oldHass.states[this._config.entity] !== this.hass.states[this._config.entity]) {
        this._fetchTasks();
      }
    }
  }

  private async _fetchTasks() {
    if (!this.hass || !this._config?.entity) return;
    try {
      const result = await this.hass.callWS({
        type: 'todo/item/list',
        entity_id: this._config.entity
      });
      this._items = result.items || [];
    } catch (e) {
      console.error('Ошибка загрузки задач', e);
    }
  }

  private async _toggleTask(item: TodoItem) {
    const newStatus = item.status === 'completed' ? 'needs_action' : 'completed';
    try {
      await this.hass.callService('todo', 'update_item', {
        entity_id: this._config.entity,
        item: item.id,
        status: newStatus
      });
      this._fetchTasks();
    } catch (err) {
      console.error('Ошибка обновления задачи', err);
    }
  }

  render() {
    if (!this._config || !this.hass) return html``;

    const total = this._items.length;
    const completed = this._items.filter(i => i.status === 'completed').length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    return html`
      <div class="glass-card">
        <div class="glass-header">
          <div class="glass-title">${this._config.title || 'Домашние задачи'}</div>
        </div>

        <div class="tasks-list">
          ${this._items.map(item => html`
            <div class="glass-item">
              <input
                type="checkbox"
                class="task-checkbox"
                .checked=${item.status === 'completed'}
                @change=${() => this._toggleTask(item)}
              />
              <div class="task-details">
                <span class="task-title ${item.status === 'completed' ? 'done' : ''}">${item.summary}</span>
                ${item.due ? html`<span class="task-due">${item.due}</span>` : ''}
              </div>
            </div>
          `)}
        </div>

        <div class="progress-container">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span>Выполнено: ${completed} из ${total}</span>
            <span>${percent}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${percent}%;"></div>
          </div>
        </div>
      </div>
    `;
  }
}
