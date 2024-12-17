import { CalendarEvent } from '../types/calendar';

export const mockEvents: Record<string, CalendarEvent[]> = {
  '2024-09-01': [
    { id: '1', title: 'Facial Appointment', startTime: '04:00', color: 'blue' },
    { id: '2', title: 'Dermal Fillers Appointment', startTime: '20:00', color: 'blue' }
  ],
  '2024-09-07': [
    { id: '3', title: 'Dermal Fillers Appointment', startTime: '14:30', color: 'purple' }
  ],
  '2024-09-08': [
    { id: '4', title: 'Massage Appointment', startTime: '10:00', color: 'brown' }
  ],
  '2024-09-09': [
    { id: '5', title: 'Facial Appointment', startTime: '09:00', color: 'blue' },
    { id: '6', title: 'Massage Appointment', startTime: '10:00', color: 'brown' },
    { id: '7', title: 'Laser Hair Removal', startTime: '10:00', color: 'blue' },
    { id: '8', title: 'Botox Appointment', startTime: '12:45', color: 'green' }
  ],
  '2024-09-15': [
    { id: '9', title: 'Inventory Check', startTime: '11:30', color: 'purple' },
    { id: '10', title: 'Staff Meeting', startTime: '11:45', color: 'brown' },
    { id: '11', title: 'Botox Appointment', startTime: '14:00', color: 'green' },
    { id: '12', title: 'Botox Appointment', startTime: '16:30', color: 'blue' }
  ],
  '2024-09-19': [
    { id: '13', title: 'Microblading Appointment', startTime: '13:45', color: 'green' }
  ],
  '2024-09-21': [
    { id: '14', title: 'Microblading Appointment', startTime: '12:00', color: 'blue' },
    { id: '15', title: 'Microblading Appointment', startTime: '17:30', color: 'purple' },
    { id: '16', title: 'Microblading Appointment', startTime: '17:45', color: 'purple' }
  ],
  '2024-09-22': [
    { id: '17', title: 'Facial Appointment', startTime: '00:45', color: 'green' }
  ],
  '2024-09-25': [
    { id: '18', title: 'Microblading Appointment', startTime: '12:30', color: 'green' },
    { id: '19', title: 'Laser Hair Removal', startTime: '17:45', color: 'blue' }
  ],
  '2024-09-28': [
    { id: '20', title: 'Body Contouring', startTime: '04:45', color: 'green' }
  ]
}