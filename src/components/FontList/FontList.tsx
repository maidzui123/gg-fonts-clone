import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineViewModule, MdOutlineViewList } from "react-icons/md";
import FontCard from "../FontCard";
import { useFetchFonts } from "../../hooks/useFetchFonts";

const FontList = () => {
  const [fontLoading, setFontLoading] = useState(true);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p className="text-[#e8eaed] w-[300px] text-balance">
          Search results are based on font and font designer names which most
          closely match your query, and are ranked using the following factors:
          (1) web usage of the font family; (2) trend in web usage of the font
          family; (3) the number of styles in the font family; (4) the date the
          font family was added to Google Fonts; and/or (5) how applicable the
          font family is to the dominant language(s) in your country (based on
          your location and settings). The relative weight given to each factor
          is determined by the sorting method you choose—for example, the date
          the font family was added to Google Fonts will play a bigger role if
          you choose to sort by "Newest".
        </p>
      ),
    },
  ];

  const { data: fonts } = useFetchFonts();

  const addFontLink = (fontFamily: string) => {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      / /g,
      "+"
    )}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };

  useEffect(() => {
    fonts?.forEach((font) => {
      addFontLink(font.family);
    });
    setFontLoading(false);
  }, [fonts]);

  return (
    <div className="mt-8 max-w-full ">
      <div className="w-full flex justify-between items-center mb-4">
        <p className=" text-sm text-[#9aa0a6]">1790 of 1790 families</p>
        <div className="flex gap-2 items-center">
          <Dropdown menu={{ items }} placement="bottom">
            <button className=" group transition-all flex items-center gap-2 p-2 hover:bg-[rgba(232,234,237,.04)] hover:rounded-sm cursor-pointer">
              <p className="text-[#e8eaed] text-base font-bold">
                About these results
              </p>
              <PiWarningCircleBold className=" w-6 h-6 text-[#e8eaed]" />
            </button>
          </Dropdown>
          <div className="flex">
            <button className=" border-[1px] border-[#9aa0a6] transition-all h-fit flex items-center p-1 hover:bg-[rgba(232,234,237,.04)] rounded-s-md cursor-pointer">
              <MdOutlineViewModule className=" w-6 h-6 text-[#9aa0a6]" />
            </button>
            <button className=" border-[1px] border-[#9aa0a6] transition-all h-fit flex items-center p-1 hover:bg-[rgba(232,234,237,.04)]  rounded-e-md cursor-pointer">
              <MdOutlineViewList className=" w-6 h-6 text-[#9aa0a6]" />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-12">
        {fonts &&
          fonts.map((font, index) => {
            return (
              <FontCard
                key={index}
                font={font.family}
                styles={font.styles}
                fontLoading={fontLoading}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FontList;
