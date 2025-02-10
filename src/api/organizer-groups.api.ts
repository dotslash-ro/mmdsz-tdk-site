import { strapiToken, strapiUrl } from "../constants";
import type { StrapiOrganizerGroups } from "../types/organizer-groups.types";

export async function fetchOrganizerGroups(): Promise<StrapiOrganizerGroups> {
  const res = await fetch(`${strapiUrl}/organizer-groups?populate[0]=organizers`, {
    headers: { Authorization: `Bearer ${strapiToken}` },
  });
  if (!res.ok) {
    throw new Error("Couldn't load groups");
  }
  return (await res.json()) as StrapiOrganizerGroups;
}
