import { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import type { MenuProps } from "antd";
import { Slider, Dropdown } from "antd";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./CustomDropdown.css";
import { usePreview } from "../../contexts/PreviewContext";

const FiltersSidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [isFontSizeActive, setIsFontSizeActive] = useState(false);

  const { previewText, previewSize, changePreviewText, changePreviewSize } =
    usePreview();

  const handleChangeSizeClick = () => {
    setIsFontSizeActive(!isFontSizeActive);
  };

  const handleResetAllClick = () => {
    changePreviewText("");
    changePreviewSize(40);
    window.history.replaceState(null, "", window.location.pathname);
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

  return (
    <div
      className={` sticky top-0 transition-all duration-300 ease-in-out ${
        isSidebarOpen
          ? "w-[309px] py-5 px-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#bdc1c6] scrollbar-track-[#282a2a]"
          : "w-0 p-0"
      } bg-[#282a2a] overflow-hidden`}
    >
      <div
        className={` sticky top-0 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[410px]"
        }`}
      >
        <div className="flex flex-col">
          <div className=" flex items-center justify-end">
            <button
              onClick={handleResetAllClick}
              className=" p-2 rounded flex gap-2 items-center hover:bg-[rgba(138,180,248,.04)]"
            >
              <MdOutlineRefresh className=" w-6 h-6 text-[#8ab4f8]" />
              <p className=" text-base font-bold text-[#8ab4f8]">Reset all</p>
            </button>
            <div
              onClick={toggleSidebar}
              className=" group transition-all duration-300 w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#3c3d40] cursor-pointer"
            >
              <IoMdClose className="w-6 h-6 text-[#9aa0a6] font-medium transition-colors duration-300 group-hover:text-[#e8eaed]" />
            </div>
          </div>
          <p className=" text-[#e8eaed] text-base font-bold mb-4">Preview</p>
          <div className=" p-2 border-b-[1px] border-[#464a53]">
            <textarea
              style={{ resize: "none" }}
              className=" w-full h-[156px] bg-[#3c4043] rounded-2xl p-4 text-[#e8f0fe] placeholder:text-[#e8f0fe] text-base outline-none"
              placeholder="Type something"
              defaultValue={previewText}
              value={previewText}
              onChange={(e) => changePreviewText(e.target.value)}
            />
            <div className="flex items-center justify-between my-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
