import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';

export class LiquidDailyTasksCardEditor extends LitElement {
  @property({ attribute: false }) public hass: any;
  @state() private _config: any;

  public setConfig(config: any): void {
    this._config = config;
  }

  private _schema = [
    {
      name: 'title',
      label: 'Заголовок карточки',
      selector: { text: {} }
    },
    {
      name: 'entity',
      label: 'Список задач (Todo)',
      selector: { entity: { domain: 'todo' } }
    }
  ];

  private _valueChanged(ev: CustomEvent) {
    const detail = ev.detail.value;
    const event = new CustomEvent('config-changed', {
      detail: { config: { ...this._config, ...detail } },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${(s: any) => s.label || s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
