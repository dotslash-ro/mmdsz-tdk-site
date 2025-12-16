export type StrapiCollection<T> = {
  data: Array<StrapiSingle<T>>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiSingle<T> = {
  id: number;
  attributes: T;
};

export type StrapiSingleEnvelope<T> = {
  data: StrapiSingle<T>;
  meta: object;
};

export type StrapiTypeWithInclude<T, K extends Record<string, unknown>> = T & {
  [key in keyof K]: StrapiSingle<K[key]>;
};
