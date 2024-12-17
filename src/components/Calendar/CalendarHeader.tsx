import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({ currentDate, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm font-medium">
            {format(currentDate, 'MMM').toUpperCase()}
          </span>
          <h1 className="text-xl font-semibold text-white">
            {format(currentDate, 'yyyy')}
          </h1>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={onPrevMonth}
            className="p-1.5 hover:bg-gray-700 rounded-lg"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-1.5 hover:bg-gray-700 rounded-lg"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 rounded-lg">
          Day
        </button>
        <button className="px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 rounded-lg">
          Week
        </button>
        <button className="px-3 py-1.5 text-sm text-white bg-gray-700 rounded-lg">
          Month
        </button>
        <button className="ml-4 px-4 py-1.5 text-sm text-white bg-indigo-600 rounded-lg flex items-center">
          + Add Event
        </button>
      </div>
    </header>
  );
}