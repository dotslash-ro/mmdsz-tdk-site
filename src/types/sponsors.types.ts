type SponsorType = "Támogató" | "Kiemelet támogató" | "Partner" | "Védnök" | "Főtámogató";

export type Sponsor = {
  sponsorLogo: string;
  type: SponsorType;
  sponsorLink: string;
};

export type StrapiSponsors = {
  data: [
    {
      id: number;
      attributes: {
        sponsorLink: string;
        type: SponsorType;
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
