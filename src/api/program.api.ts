import { strapiToken, strapiUrl } from "../constants";
import type { StrapiProgram } from "../types/program.types";

export async function fetchProgram() {
  const res = await fetch(
    `${strapiUrl}/program?populate[programDays][populate][sections][populate][locations][populate][0]=programItems`,
    {
      headers: { Authorization: `Bearer ${strapiToken}` },
    }
  );
  const data = (await res.json()) as StrapiProgram;
  console.log(data);
  return data;
}
