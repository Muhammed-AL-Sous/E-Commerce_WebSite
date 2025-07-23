import { NavLink } from "react-router-dom";
import "../../Styles/AdminSideBarStyles.css";

const menuItems = [
  { name: "إدارة الطلبات", path: "/admin/allorders" },
  { name: "إدارة المنتجات", path: "/admin/allproducts" },
  { name: "إضافة ماركة", path: "/admin/addbrand" },
  { name: "إضافة تصنيف", path: "/admin/addcategory" },
  { name: "إضافة تصنيف فرعي", path: "/admin/addsubcategory" },
  { name: "إضافة منتج", path: "/admin/addproduct" },
];

const AdminSideBar = () => {
  return (
    <aside className="admin-main-div-side-bar">
      <ul className="admin-ul-list-side-bar">
        {menuItems.map((item, index) => (
          <li key={index} className="admin-list-side-bar">
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
