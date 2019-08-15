export interface Image extends Details {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Details {
  favorite?: boolean;
}
