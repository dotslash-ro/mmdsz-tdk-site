import { strapiToken, strapiUrl } from "../constants";
import type { Sponsor, StrapiSponsors } from "../types/sponsors.types";

export async function fetchSponsors(): Promise<Sponsor[]> {
  const res = await fetch(`${strapiUrl}/sponsors?populate[0]=sponsorLogo`, {
    headers: { Authorization: `Bearer ${strapiToken}` },
  });
  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as StrapiSponsors;
  return data.data.map((data) => ({
    sponsorLink: data.attributes.sponsorLink,
    sponsorLogo: data.attributes.sponsorLogo.data.attributes.url,
    type: data.attributes.type,
    order: data.attributes.order ?? 20,
  }));
}
