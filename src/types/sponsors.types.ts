type SponsorType = "Támogató" | "Kiemelt támogató" | "Partner" | "Védnök" | "Főtámogató" | "Állandó Támogató";

export type Sponsor = {
  sponsorLogo: string;
  type: SponsorType;
  sponsorLink: string;
  order: number;
};

export type StrapiSponsors = {
  data: [
    {
      id: number;
      attributes: {
        sponsorLink: string;
        type: SponsorType;
        order?: number;
        sponsorLogo: {
          data: {
            id: number;
            attributes: {
              url: string;
            };
          };
        };
      };
    }
  ];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
