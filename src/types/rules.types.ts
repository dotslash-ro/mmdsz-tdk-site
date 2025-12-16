import type { StrapiSingleEnvelope } from "./strapi.types";

export type Rules = {
  body: string;
};

export type StrapiRules = StrapiSingleEnvelope<Rules>;
