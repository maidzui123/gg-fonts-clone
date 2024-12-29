import { MdOutlineTune } from "react-icons/md";
import { MdClose } from "react-icons/md";

const FiltersButton = ({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="w-fit flex items-center gap-1 py-3 px-4 rounded-[50px] border-[1px] border-[#8ab4f8] hover:bg-[rgba(138,180,248,0.04)]"
    >
      {!isSidebarOpen ? <MdOutlineTune className=" text-[#8ab4f8] w-[18px] h-[18px]" /> : <MdClose className=" text-[#8ab4f8] w-[18px] h-[18px]" />}
      <p className="text-[#8ab4f8] text-base font-bold">Filters</p>
    </button>
  );
};

export default FiltersButton;
