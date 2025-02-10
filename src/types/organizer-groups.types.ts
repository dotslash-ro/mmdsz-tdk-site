import type { StrapiCollection } from "./strapi.types";

export type Organizer = {
  name: string;
  groupLead: boolean;
};

export type OrganizerGroup = {
  name: string;
  description: string;
  selectable: boolean;
  active: boolean;
  organizerList: string;
};

export type StrapiOrganizerGroups = StrapiCollection<OrganizerGroup>;
