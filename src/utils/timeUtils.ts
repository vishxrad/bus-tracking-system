import { formatDistanceToNow } from 'date-fns';

export const formatArrivalTime = (dateString: string): string => {
  const arrivalTime = new Date(dateString);
  const minutesAway = Math.round(
    (arrivalTime.getTime() - new Date().getTime()) / (1000 * 60)
  );

  if (minutesAway <= 0) {
    return 'Arriving now';
  } else if (minutesAway === 1) {
    return '1 minute away';
  } else {
    return `${minutesAway} minutes away`;
  }
};