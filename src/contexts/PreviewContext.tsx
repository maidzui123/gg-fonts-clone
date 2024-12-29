import React, { createContext, useContext, useState, ReactNode } from "react";

interface PreviewContextProps {
  previewText: string;
  setPreviewText: React.Dispatch<React.SetStateAction<string>>;
  previewSize: number;
  setPreviewSize: React.Dispatch<React.SetStateAction<number>>;
  changePreviewText: (text: string) => void;
  changePreviewSize: (size: number) => void;
}

const PreviewContext = createContext<PreviewContextProps | undefined>(
  undefined
);

export const PreviewProvider = ({ children }: { children: ReactNode }) => {
  
  const getDefaultPreviewText = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("previewText") || "";
  };

  const getDefaultPreviewSize = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("previewSize") || "40", 10);
  };

  const [previewText, setPreviewText] = useState(getDefaultPreviewText());
  const [previewSize, setPreviewSize] = useState(getDefaultPreviewSize());

  const addUrlQuery = (key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url.toString());
  };

  const changePreviewText = (text: string) => {
    addUrlQuery("previewText", text);
    setPreviewText(text);
  };

  const changePreviewSize = (size: number) => {
    addUrlQuery("previewSize", size.toString());
    setPreviewSize(size);
  };

  return (
    <PreviewContext.Provider
      value={{
        previewText,
        setPreviewText,
        previewSize,
        setPreviewSize,
        changePreviewText,
        changePreviewSize,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error("usePreview must be used within a PreviewProvider");
  }
  return context;
};
