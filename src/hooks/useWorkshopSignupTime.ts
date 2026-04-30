import { useEffect, useState } from "react";

export const workshopSignupStartAtMs = new Date("2026-04-30T18:00:00+03:00").getTime();

export function isWorkshopSignupOpen(nowMs = Date.now()) {
  return nowMs >= workshopSignupStartAtMs;
}

export function useWorkshopSignupOpen() {
  const [isOpen, setIsOpen] = useState(() => isWorkshopSignupOpen());

  useEffect(() => {
    if (isOpen) {
      return;
    }

    const timeout = window.setTimeout(() => setIsOpen(true), Math.max(workshopSignupStartAtMs - Date.now(), 0));

    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  return isOpen;
}
