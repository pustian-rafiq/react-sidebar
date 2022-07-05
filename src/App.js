import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
    if (windowDimenion.winWidth < 500) {
      setIsOpen(true);
    }else{
      setIsOpen(false)
    }
  };
 
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);


  // console.log(windowDimenion.winWidth);
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <div className={isOpen ? "leftSidebarMobile" : "leftSidebar"}>
            {isOpen ? (
              <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </div>
          <div className="mainBody">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/file-manager" element={<FileManager />} />
              <Route path="/order" element={<Order />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/settings" element={<Setting />} />

              <Route path="*" element={<> not found</>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
