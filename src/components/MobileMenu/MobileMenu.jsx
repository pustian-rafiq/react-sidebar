import { FaHome, FaRegUser, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./mobilemenu.css"
const MobileMenu = ({isOpen,setIsOpen}) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      
  return (
    <>
      <div className={isOpen ? "sidebarMenucontainer" : "sidebar-container"}>
        <FaBars className="barIcon" onClick={toggleMenu} />

        <div className="top-section">
          <FaRegUser className="Profile"/>
        </div>

        <span className="divider" />
        <div className="icon-list">
          <div className="icon">
            <NavLink to="/" className="iconText">
              <FaHome title="Home" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/users" className="iconText">
              <FaRegUser title="Home" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/messages" className="iconText">
              <FaRegUser title="Home" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/analytics" className="iconText">
              <FaRegUser title="Analytics" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/file-manager" className="iconText">
              <FaRegUser title="File Manager" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/saved" className="iconText">
              <FaRegUser title="Saved" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/orders" className="iconText">
              <FaRegUser title="Order" />
            </NavLink>
          </div>
          <div className="icon">
            <NavLink to="/settings" className="iconText">
              <FaRegUser title="Setting" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
