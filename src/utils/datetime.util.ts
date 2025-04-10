export function formatTime(timeStr: string) {
  // assumes timeStr is in "HH:MM:SS.SSS" format
  const [hours, minutes] = timeStr.split(":");
  return `${hours}:${minutes}`;
}
