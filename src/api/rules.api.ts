import { strapiToken, strapiUrl } from "../constants";
import type { StrapiRules } from "../types/rules.types";

export async function fetchRules() {
  const res = await fetch(`${strapiUrl}/rule`, {
    headers: { Authorization: `Bearer ${strapiToken}` },
  });
  const data = (await res.json()) as StrapiRules;
  console.log(data);
  return data;
}
