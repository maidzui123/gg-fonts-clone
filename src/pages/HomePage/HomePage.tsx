import { useState } from "react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import FontList from "../../components/FontList";
import FiltersSidebar from "../../components/FiltersSidebar";
import FiltersButton from "../../components/FiltersButton";
const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#202124]">
      <div className="flex h-full">
        <SideBar />
        <FiltersSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className=" px-[60px] max-w-full flex-1 transition-all duration-300 ease-in-out overflow-x-hidden">
          <div className="flex flex-col">
            <Header />
            <FiltersButton
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
            <FontList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
