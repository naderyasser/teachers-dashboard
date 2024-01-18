import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import MobilMenu from "./components/MobilMenu";
import MainMenu from "./components/MainMenu";
import { useState } from "react";
function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full relative overflow-hidden">
      <Navbar />
      <div
        className={`absolute top-16 z-10 ${
          !openMenu ? "right-[-100%]" : "right-0"
        }    w-full h-full bg-gray transition-all duration-300 ease-out `}
      >
        <MainMenu />
      </div>
      <div>
        <Outlet />
        <MainMenu />
      </div>
      <div className="md:hidden fixed bottom-0 right-0 w-full bg-gray ">
        <MobilMenu openMenu={setOpenMenu} />
      </div>
    </div>
  );
}

export default App;
