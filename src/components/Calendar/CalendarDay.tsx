import { format } from 'date-fns';
import { CalendarEvent } from '../../types/calendar';
import { formatTime, formatDayNumber } from '../../utils/date';
import { colorClasses } from './styles';

interface CalendarDayProps {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
}

export function CalendarDay({ date, events, isCurrentMonth }: CalendarDayProps) {
  const dayNumber = formatDayNumber(date);
  
  return (
    <div className="min-h-[120px] border-b border-r border-gray-800 p-1">
      <div className={`text-sm mb-1 ${isCurrentMonth ? 'text-gray-300' : 'text-gray-600'}`}>
        {dayNumber}
      </div>
      <div className="space-y-1">
        {events.map((event) => (
          <div
            key={event.id}
            className={`px-2 py-1 rounded text-sm truncate ${colorClasses[event.color]}`}
          >
            {event.title} {formatTime(event.startTime)}
          </div>
        ))}
      </div>
    </div>
  );
}