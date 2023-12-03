import { differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'

export const bookCreatedAt = (createdAt: string): string => {
  const currentDate: Date = new Date();

  const resultInMinutes: number = differenceInMinutes(currentDate, Date.parse(createdAt));
  const resultInHours: number = differenceInHours(currentDate, Date.parse(createdAt));
  const resultInDays: number = differenceInDays(currentDate, Date.parse(createdAt));

  if (resultInDays === 1 || resultInHours === 24) {
    return `Created ${resultInDays} day ago `;
  }
  if (resultInDays > 1 || resultInHours > 24) {
    return `Created ${resultInDays} days ago `;
  }
  if (resultInMinutes === 60 || resultInHours === 1) {
    return `Created ${resultInHours} hour ago `;
  }
  if (resultInMinutes > 60 && resultInHours > 1) {
    return `Created ${resultInHours} hours ago `;
  }
  if (resultInMinutes === 0) {
    return 'Created Just now';
  }
  if (resultInMinutes === 1) {
    return `Created ${resultInMinutes} minute ago`;
  }
  if (resultInMinutes > 1 && (resultInMinutes as number) < 60) {
    return `Created ${resultInMinutes} minutes ago `;
  }
  return 'Created at an unknown time';
};
