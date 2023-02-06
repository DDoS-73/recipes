export const showFormatTime = (hours: number, minutes: number) => {
  const hoursStr = hours ? `${hours} годин${hours === 1 ? 'а' : 'и'}` : '';
  const minutesStr = minutes ? `${minutes} хвилин` : '';
  return `${hoursStr} ${minutesStr}`;
};
