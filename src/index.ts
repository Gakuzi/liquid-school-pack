import { LiquidSchoolScheduleCard } from './schedule/schedule-card';
import { LiquidSchoolScheduleCardEditor } from './schedule/schedule-card-editor';
import { LiquidDailyTasksCard } from './tasks/tasks-card';
import { LiquidDailyTasksCardEditor } from './tasks/tasks-card-editor';

customElements.define('liquid-school-schedule-card', LiquidSchoolScheduleCard);
customElements.define('liquid-school-schedule-card-editor', LiquidSchoolScheduleCardEditor);

customElements.define('liquid-daily-tasks-card', LiquidDailyTasksCard);
customElements.define('liquid-daily-tasks-card-editor', LiquidDailyTasksCardEditor);

(window as any).customCards = (window as any).customCards || [];

(window as any).customCards.push({
  type: 'liquid-school-schedule-card',
  name: 'Liquid School Schedule',
  description: 'Школьное расписание (сенсоры дневника / календари)',
  preview: true,
});

(window as any).customCards.push({
  type: 'liquid-daily-tasks-card',
  name: 'Liquid Daily Tasks',
  description: 'Домашние задачи (синхронизация Todo с телефоном)',
  preview: true,
});
