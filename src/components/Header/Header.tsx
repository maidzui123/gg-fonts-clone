import Logo from "../../assets/logo/gg_fonts.webp";
import SearchBar from "../SearchBar";

const Header = () => {
  const onLogoClick = () => {
    window.location.href = "/" + window.location.search;
  };
  return (
    <div className=" w-full h-[88px] flex justify-between items-center  text-[#dadce0] gap-4">
      <div
        onClick={onLogoClick}
        className=" flex gap-4 items-center cursor-pointer"
      >
        <img src={Logo} alt="" className=" w-12 h-12 " />
        <p className="text-2xl">
        <span className=" font-medium">Google</span> Fonts
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
