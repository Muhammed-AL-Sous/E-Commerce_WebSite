import { NavLink } from "react-router-dom";
import "../../Styles/AdminSideBarStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  { name: "إدارة الطلبات", path: "/admin/allorders", icon: "clipboard-list" },
  { name: "إدارة المنتجات", path: "/admin/allproducts", icon: "box-open" },
  { name: "إضافة ماركة", path: "/admin/addbrand", icon: "tags" },
  { name: "إضافة تصنيف", path: "/admin/addcategory", icon: "plus" },
  { name: "إضافة تصنيف فرعي", path: "/admin/addsubcategory", icon: "sitemap" },
  { name: "إضافة منتج", path: "/admin/addproduct", icon: "plus" },
];

const AdminSideBar = () => {
  return (
    <aside className="admin-main-div-side-bar">
      <ul className="admin-ul-list-side-bar pt-2">
        {menuItems.map((item, index) => (
          <li key={index} className="admin-list-side-bar">
            <FontAwesomeIcon
              icon={item.icon}
              className="me-2 icon"
              width="14px"
              height="14px"
            />
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `admin-sidebar-link ${
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

export default AdminSideBar;
