import axios from "axios";
import { FontItem } from "../types/FontTypes";

const API_KEY = import.meta.env.VITE_GOOGLE_FONTS_API_KEY;

export const fetchFontsAPI = async (): Promise<FontItem[]> => {
  const response = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`
  );
  return response.data.items.slice(0, 100).map((font: any) => ({
    family: font.family,
    styles: font.variants.length,
    designer: font.designer || "Unknown",
    variants: font.variants,
  }));
};

export const fetchFontDetailAPI = async (font: string): Promise<FontItem> => {
  const response = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&family=${font}`
  );

  const fontDetail = response?.data?.items?.[0];

  return {
    family: fontDetail.family,
    styles: fontDetail.variants.length,
    designer: fontDetail.designer || "Unknown",
    variants: fontDetail.variants,
    files: fontDetail.files,
  };
};
