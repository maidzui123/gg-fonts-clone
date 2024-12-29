import { GrSearch } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className=" flex flex-1 w-full mx-4 gap-4 items-center">
      <div className="flex w-full">
        <div className="flex w-full items-center gap-2 bg-[#252933] p-4 rounded-s-[48px] border-r-[#464a53] border-r-[1px]">
          <GrSearch className="text-graƒy-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Search fonts"
            className=" w-full bg-transparent h-[24px] outline-none"
          />
        </div>
        <div className="flex items-center gap-2 bg-[#252933] rounded-e-[48px] px-4 border-l-[#464a53] border-l-[1px]">
          <div className="group transition-all flex items-center gap-6 px-4 h-[50px] hover:bg-[#393c45] hover:rounded-md cursor-pointer">
            <div className="">
              <span className=" text-xs">Sort by</span>
              <p className="text-sm font-bold">Trending</p>
            </div>
            <MdOutlineArrowDropDown className=" w-6 h-6 text-[#9aa0a6]" />
          </div>
        </div>
      </div>
      <div className=" ">
        <div className=" group transition-all duration-300 w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#3c3d40] cursor-pointer">
          <MdOutlineShoppingBag className="w-6 h-6 text-[#9aa0a6] font-medium transition-colors duration-300 group-hover:text-[#e8eaed]" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
