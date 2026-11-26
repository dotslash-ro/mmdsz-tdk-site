import { useEffect, useState } from "react";

import { organizerSignupEnd, organizerSignupStart } from "../constants";
import { romanianTimeToMs } from "./datetime.util";

export const organizerSignupStartMs = romanianTimeToMs(organizerSignupStart);
export const organizerSignupEndMs = romanianTimeToMs(organizerSignupEnd);

export type OrganizerSignupPhase = "not-started" | "open" | "closed";

export const getOrganizerSignupPhase = (nowMs = Date.now()): OrganizerSignupPhase =>
  nowMs < organizerSignupStartMs ? "not-started" : nowMs <= organizerSignupEndMs ? "open" : "closed";

/** Current organizer signup phase, derived from the start/end constants; re-checked every second. */
export const useOrganizerSignupPhase = () => {
  const [phase, setPhase] = useState<OrganizerSignupPhase>(() => getOrganizerSignupPhase());

  useEffect(() => {
    const interval = setInterval(() => setPhase(getOrganizerSignupPhase()), 1000);
    return () => clearInterval(interval);
  }, []);

  return phase;
};
