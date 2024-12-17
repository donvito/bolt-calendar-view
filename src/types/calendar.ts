export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime?: string;
  color: 'blue' | 'purple' | 'green' | 'brown';
}

export interface DayEvents {
  date: Date;
  events: CalendarEvent[];
}