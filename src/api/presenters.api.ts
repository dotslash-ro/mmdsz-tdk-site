import { strapiToken, strapiUrl } from "../constants";
import type { StrapiPresenters } from "../types/presenters.types";

export async function fetchPresenters() {
  const res = await fetch(`${strapiUrl}/presenters?populate=*`, {
    headers: { Authorization: `Bearer ${strapiToken}` },
  });
  const data = (await res.json()) as StrapiPresenters;
  console.log(data);
  return data;
}
