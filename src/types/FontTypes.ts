export interface FontItem {
    family: string;
    styles: number;
    designer: string;
    variants?: string[];
    files?: Record<string, string>;
  }