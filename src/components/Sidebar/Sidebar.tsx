import { TbWorld } from "react-icons/tb";
import { MdOutlineInterests } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdFontDownload } from "react-icons/md";

const SideBar = () => {
  const barItems = [
    {
      name: "Fonts",
      icon: <MdFontDownload className="w-6 h-6 text-[#dadce0] font-medium" />,
      defaultChecked: true,
    },
    {
      name: "Noto",
      icon: <TbWorld className="w-6 h-6 text-[#dadce0] font-medium" />,
      defaultChecked: false,
    },
    {
      name: "Icons",
      icon: (
        <MdOutlineInterests className="w-6 h-6 text-[#dadce0] font-medium" />
      ),
      defaultChecked: false,
    },
    {
      name: "Knowledge",
      icon: <IoSchoolOutline className="w-6 h-6 text-[#dadce0] font-medium" />,
      defaultChecked: false,
    },
    {
      name: "FAQ",
      icon: (
        <MdOutlineHelpOutline className="w-6 h-6 text-[#dadce0] font-medium" />
      ),
      defaultChecked: false,
    },
  ];

  return (
    <div className=" h-screen w-[96px] py-6 bg-[#2d2e31] flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        {barItems.map((item, index) => {
          return (
            <div
              key={index}
              className="group flex flex-col items-center justify-center w-[80px] h-[56px] gap-2 cursor-pointer"
            >
              <div
                className={` ${
                  item.defaultChecked
                    ? "bg-[#4b737b]"
                    : "group-hover:bg-[#424242]"
                } transition-all duration-300 w-[56px] h-[32px] rounded-2xl flex justify-center items-center`}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>
              <span className="text-[#dadce0] text-xs font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="group transition-all duration-300 w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#3c3d40] cursor-pointer">
        <MdOutlineLightMode className="w-6 h-6 text-[#9aa0a6] font-medium transition-colors duration-300 group-hover:text-[#e8eaed]" />
      </div>
    </div>
  );
};

export default SideBar;
