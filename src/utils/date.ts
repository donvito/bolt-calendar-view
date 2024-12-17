import { format } from 'date-fns';

export const formatTime = (time: string): string => {
  return format(new Date(`2024-01-01T${time}`), 'h:mm a');
};

export const formatDayNumber = (date: Date): string => {
  return format(date, 'd');
};