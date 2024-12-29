import { MdOutlineArrowDropDown } from "react-icons/md";
import type { MenuProps } from "antd";
import { Slider, Dropdown } from "antd";
import { useState, useEffect } from "react";
import { usePreview } from "../../contexts/PreviewContext";
import TextField from "@mui/material/TextField";
import { useFetchFontDetail } from "../../hooks/useFetchFonts";
import FontVarirantCard from "../FontVariantCard";
const FontDetail = ({ font }: { font: string }) => {
  const [fontLoading, setFontLoading] = useState(true);
  const [isFontSizeActive, setIsFontSizeActive] = useState(false);

  const {
    data: fontVariants,
    isLoading,
    isError,
    error,
  } = useFetchFontDetail(font);

  const { previewText, previewSize, changePreviewText, changePreviewSize } =
    usePreview();

  const addFontStyles = (fontFamily: string, files: Record<string, string>) => {
    const style = document.createElement("style");

    const fontFaces = Object.entries(files)
      .map(([weightOrStyle, url]) => {
        const [weight, style] = parseWeightAndStyle(weightOrStyle);
        return `
            @font-face {
              font-family: '${fontFamily}';
              font-style: ${style};
              font-weight: ${weight};
              src: url('${url}') format('truetype');
            }
          `;
      })
      .join("\n");

    style.innerHTML = fontFaces;
    document.head.appendChild(style);
  };

  const parseWeightAndStyle = (key: string): [string, string] => {
    if (key.includes("italic")) {
      return [key.replace("italic", ""), "italic"];
    }
    return [key, "normal"];
  };

  useEffect(() => {
    if (fontVariants?.family && fontVariants?.files) {
      addFontStyles(fontVariants.family, fontVariants.files);
    }
    setFontLoading(false);
  }, [fontVariants]);

  const handleChangeSizeClick = () => {
    setIsFontSizeActive(!isFontSizeActive);
  };

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(8);
          }}
        >
          8
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(12);
          }}
        >
          12
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(14);
          }}
        >
          14
        </button>
      ),
    },
    {
      key: "4",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(20);
          }}
        >
          20
        </button>
      ),
    },
    {
      key: "5",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(24);
          }}
        >
          24
        </button>
      ),
    },
    {
      key: "6",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(32);
          }}
        >
          32
        </button>
      ),
    },
    {
      key: "7",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(40);
          }}
        >
          40
        </button>
      ),
    },
    {
      key: "8",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(64);
          }}
        >
          64
        </button>
      ),
    },
    {
      key: "9",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(96);
          }}
        >
          96
        </button>
      ),
    },
    {
      key: "10",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(120);
          }}
        >
          120
        </button>
      ),
    },
    {
      key: "11",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(184);
          }}
        >
          184
        </button>
      ),
    },
    {
      key: "12",
      label: (
        <button
          className="w-full h-full text-left p-3"
          onClick={() => {
            handleChangeSizeClick();
            changePreviewSize(280);
          }}
        >
          280
        </button>
      ),
    },
  ];

  return !isLoading && error ? (
    <div className=" flex flex-col items-center justify-center gap-8">
      <p className=" text-white text-[200px]">(≥o≤)</p>
      <p className=" text-white text-[48px]">
        Unfortunately, this page doesn't exist.
      </p>
      <button
        onClick={handleHomeClick}
        className="w-fit flex items-center gap-1 py-3 px-4 rounded-[50px] border-[1px] border-[#8ab4f8] hover:bg-[rgba(138,180,248,0.04)]"
      >
        <p className="text-[#8ab4f8] text-base font-bold">
          Return to Google Fonts
        </p>
      </button>
    </div>
  ) : (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col">
        <span className=" text-white text-[56px]">{font}</span>
        <p className=" text-[#9aa0a6] text-base">
          Designed by{" "}
          <a href="" className=" text-[#8AB4F8]">
            Mai Duy
          </a>
        </p>
      </div>
      <div className=" flex flex-col items-center justify-center gap-16">
        <p
          style={{ fontFamily: fontVariants?.family }}
          className={`text-white text-[56px] text-center transform transition-all duration-1000 ${
            fontLoading
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          Whereas disregard and contempt for human rights have resulted
        </p>
        <div className="flex items-center gap-4">
          <p className=" text-white text-base">Select preview text:</p>
          <div className=" rounded-[50px] p-3 border border-white flex items-center justify-center gap-32 cursor-pointer hover:bg-[#3c3d40]">
            <p className=" text-white text-base">Writing system</p>
            <MdOutlineArrowDropDown className=" w-6 h-6 text-white" />
          </div>
          <div className=" rounded-[50px] p-3 border border-white flex items-center justify-center gap-32 cursor-pointer hover:bg-[#3c3d40]">
            <p className=" text-white text-base">Language</p>
            <MdOutlineArrowDropDown className=" w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-8">
        <p className=" text-[32px] text-[#E8EAED]">Styles</p>
        <div className="flex items-center gap-5">
          <TextField
            id="outlined-basic"
            label="Type here to preview text"
            variant="outlined"
            defaultValue={previewText}
            onChange={(e) => changePreviewText(e.target.value)}
            sx={{
              borderRadius: "50px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "50px",
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "#bbb",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#aaa",
                },
              },
              "& .MuiInputBase-input": {
                color: "#ccc",
                "&::placeholder": {
                  color: "#ccc",
                  opacity: 1,
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ccc",
              },
              width: "100%",
            }}
          />
          <Dropdown
            open={isFontSizeActive}
            menu={{ items }}
            trigger={[]}
            placement="bottom"
            overlayClassName="custom-dropdown-menu"
          >
            <button
              onClick={handleChangeSizeClick}
              className={` ${
                isFontSizeActive ? "bg-[#565656] rounded-md" : ""
              } group transition-all flex items-center gap-2 px-4 h-[50px] hover:bg-[#393c45] hover:rounded-md cursor-pointer`}
            >
              <p className="text-[#e8eaed] text-base">{previewSize}px</p>
              <MdOutlineArrowDropDown className=" w-6 h-6 text-[#9aa0a6]" />
            </button>
          </Dropdown>
          <Slider
            defaultValue={previewSize}
            min={8}
            max={300}
            value={previewSize}
            onChange={(value) => changePreviewSize(value)}
            className=" w-full"
          />
        </div>
        {!isLoading && !isError && fontVariants && (
          <div className=" flex flex-col">
            {fontVariants.variants?.map((variant: any) => (
              <FontVarirantCard
                fontLoading={fontLoading}
                fontVariant={variant}
                previewText={previewText}
                previewSize={previewSize}
                font={fontVariants.family}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FontDetail;
