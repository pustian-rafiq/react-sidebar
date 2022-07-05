import { FaHome, FaRegUser, FaBars } from "react-icons/fa";
import Profile from "../assets/profile.jpeg";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = ({isOpen, setIsOpen}) => {

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={isOpen ? {sidebarMenucontainer} : "sidebar-container"}>
        <FaBars className="barIcon" onClick={toggleMenu} />
       
          <div className="top-section">
            <img src={Profile} alt="profile" />
            <span>Md. Rafiqul Islam</span>
            <span>rafiqul.pust.cse@gmail.com</span>
          </div>
        <span className="divider" />
        <div className="icon-list">
          <div className="icon">
            <NavLink to="/" className="iconText" >
              <FaHome title="Home" />
              <span>Home</span>
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/users" className="iconText">
              <FaRegUser title="Home" />
              <span> Users</span>
              
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/messages" className="iconText">
              <FaRegUser title="Home" />
             <span> Mssages</span>
            
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/analytics" className="iconText">
              <FaRegUser title="Analytics" />
             <span> Analytics</span>
           
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/file-manager" className="iconText">
              <FaRegUser title="File Manager" />
              <span>File Manager</span>
            
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/saved" className="iconText">
              <FaRegUser title="Saved" />
              <span> Saved</span>
            
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/orders" className="iconText">
              <FaRegUser title="Order" />
              <span> Order</span>
         
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/settings" className="iconText">
              <FaRegUser title="Setting" />
             <span> Setting</span>     
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
