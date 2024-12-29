import { useQuery } from "@tanstack/react-query";
import { fetchFontsAPI, fetchFontDetailAPI } from "../services/fontsAPI";
import { FontItem } from "../types/FontTypes";

export const useFetchFonts = () => {
  return useQuery<FontItem[], Error>({
    queryKey: ["fonts"],
    queryFn: fetchFontsAPI,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useFetchFontDetail = (font: string) => {
  return useQuery<FontItem, Error>({
    queryKey: ["fontDetail", font],
    queryFn: () => fetchFontDetailAPI(font),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
