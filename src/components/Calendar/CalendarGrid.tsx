import { format, isSameMonth, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { CalendarEvent } from '../../types/calendar';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
  currentDate: Date;
  events: Record<string, CalendarEvent[]>;
}

export function CalendarGrid({ currentDate, events }: CalendarGridProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-[auto_1fr] h-full">
      {/* Calendar header */}
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div
          key={day}
          className="text-center py-2 text-sm font-medium text-gray-400 border-b border-gray-800"
        >
          {day}
        </div>
      ))}

      {/* Calendar days */}
      {days.map((date) => {
        const dateKey = format(date, 'yyyy-MM-dd');
        const dayEvents = events[dateKey] || [];
        
        return (
          <CalendarDay
            key={dateKey}
            date={date}
            events={dayEvents}
            isCurrentMonth={isSameMonth(date, currentDate)}
          />
        );
      })}
    </div>
  );
}