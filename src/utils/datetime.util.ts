export function formatTime(timeStr: string) {
  // assumes timeStr is in "HH:MM:SS.SSS" format
  const [hours, minutes] = timeStr.split(":");
  return `${hours}:${minutes}`;
}

export const ROMANIAN_TIMEZONE = "Europe/Bucharest";

/** Offset (ms) of `timeZone` from UTC at the given instant. */
function getTimeZoneOffsetMs(utcMs: number, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(utcMs));
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return asUtc - Math.floor(utcMs / 1000) * 1000;
}

/**
 * Converts a wall-clock time in Romania ("YYYY-MM-DD HH:mm" or "YYYY-MM-DD HH:mm:ss")
 * to a unix timestamp in ms. Handles EET/EEST (summer time) automatically.
 */
export function romanianTimeToMs(dateTime: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/.exec(dateTime.trim());
  if (!match) throw new Error(`Invalid date "${dateTime}", expected "YYYY-MM-DD HH:mm"`);
  const [, y, mo, d, h, mi, s = "0"] = match;
  const wallAsUtc = Date.UTC(+y, +mo - 1, +d, +h, +mi, +s);
  // first guess using the offset at that instant, then correct once (for DST boundaries)
  let utcMs = wallAsUtc - getTimeZoneOffsetMs(wallAsUtc, ROMANIAN_TIMEZONE);
  utcMs = wallAsUtc - getTimeZoneOffsetMs(utcMs, ROMANIAN_TIMEZONE);
  return utcMs;
}

/** Formats a timestamp as a Hungarian date-time in Romanian time, e.g. "2026. december 3. 23:59". */
export function formatRomanianDateTime(ms: number) {
  return new Intl.DateTimeFormat("hu-HU", {
    timeZone: ROMANIAN_TIMEZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ms));
}

/** Formats a timestamp as a Hungarian date in Romanian time, e.g. "2026. december 3.". */
export function formatRomanianDate(ms: number) {
  return new Intl.DateTimeFormat("hu-HU", {
    timeZone: ROMANIAN_TIMEZONE,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(ms));
}
