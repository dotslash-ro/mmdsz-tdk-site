import type { StrapiCollection } from "./strapi.types";

export type StrapiPresenters = StrapiCollection<Presenter>;

export type Presenter = {
  description: string | null;
  name: string;
  order: number;
  image: {
    data: { attributes: { url: string }; id: number };
  };
};
