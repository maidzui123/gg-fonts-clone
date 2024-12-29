import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import FontDetail from "../../components/FontDetail";

const FontDetailPage = () => {
  const getFontFromPath = () => {
    const path = window.location.pathname;
    const fontName = decodeURIComponent(path.split("/")[2]);
    return fontName;
  };
  const font = getFontFromPath();
  return (
    <div className="bg-[#202124]">
      <div className="flex h-full">
        <SideBar />
        <div className=" px-[60px] max-w-full flex-1 transition-all duration-300 ease-in-out overflow-x-hidden">
          <Header />
          <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
            <FontDetail font={font} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontDetailPage;
