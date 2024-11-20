import { format, isToday } from 'date-fns';

export default function formatCreatedAt(createdAt) {
  const date = new Date(createdAt);
  if (isToday(date)) {
    return format(date, 'p'); // 4:59 PM
  } else {
    return format(date, 'd MMM p'); // 16 Nov 4:59 PM
  }
}