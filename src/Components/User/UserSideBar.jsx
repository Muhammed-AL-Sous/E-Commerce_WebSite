import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../../Styles/UserSideBarStyles.css";

const menuItems = [
  { name: "إدارة الطلبات", path: "/user/allorders", icon: "clipboard-list" },
  { name: "قائمة المفضلة", path: "/user/favorites", icon: "heart" },
  { name: "العناوين الشخصية", path: "/user/address", icon: "location-dot" },
  { name: "الملف الشخصي", path: "/user/Profile", icon: "user" },
];

const UserSideBar = () => {
  return (
    <aside className="user-main-div-side-bar">
      <ul className="user-ul-list-side-bar pt-2">
        {menuItems.map((item, index) => (
          <li key={index} className="user-list-side-bar">
            <FontAwesomeIcon
              icon={item.icon}
              className="me-2 icon"
              width="14px"
              height="14px"
            />
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `user-sidebar-link ${
                  isActive ? "active-link" : "inactive-link"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UserSideBar;
