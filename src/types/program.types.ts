import { StrapiSingle } from "./strapi.types";

export type StrapiProgram = {
  data: StrapiSingle<{
    programDays: Array<ProgramDay>;
  }>;
};

export type ProgramItem = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
};

export type ProgramLocation = {
  id: number;
  name: string;
  programItems: Array<ProgramItem>;
};

export type ProgramSection = {
  id: number;
  text: string;
  locations: Array<ProgramLocation>;
};

export type ProgramDay = {
  id: number;
  name: string;
  date: string;
  sections: Array<ProgramSection>;
};
