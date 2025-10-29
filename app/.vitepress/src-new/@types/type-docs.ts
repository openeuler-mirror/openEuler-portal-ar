export interface DocsBannerItemT {
  title: string;
  desc: string;
  href: string;
  bg_light: string;
  bg_dark: string;
  bg_mb_light: string;
  bg_mb_dark: string;
  dropdown?: string;
}

export interface DocsRecommendT {
  title: string;
  columns: number;
  columns_mb: number;
  items: DocsBannerItemT[];
}

export interface DocsSectionItemT {
  title: string;
  desc: string;
  href: string;
  icon?: string;
  bg?: string;
}

export interface DocsSectionT {
  title: string;
  columns: number;
  columns_mb: number;
  items: DocsSectionItemT[];
}

export interface DocsConfig {
  hots: string[];
  recommend: DocsRecommendT;
  sections: DocsSectionT[];
}
