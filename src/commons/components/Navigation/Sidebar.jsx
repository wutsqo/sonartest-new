import React from "react";
import Menu, { MenuItem } from "../Menu";
import Brand from "../Brand";
import { GoX } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import useNavigation from "./useNavigation";
import { Link } from "react-router";

const Sidebar = () => {
  const { handleLogout, isAuthenticated, navbarMenus } = useNavigation();

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="navigation-sidebar"
        aria-label="close navigation sidebar"
        className="drawer-overlay"
      ></label>
      <div className="bg-base-100 h-screen w-80 flex flex-col">
        <div className="flex justify-between items-center p-4 border-base-300 border-b">
          <Brand />
          <label
            htmlFor="navigation-sidebar"
            aria-label="close navigation sidebar"
            className="btn btn-square btn-ghost"
          >
            <GoX className="text-2xl" />
          </label>
        </div>

        <div className="h-full overflow-y-auto">
          <Menu>
            {navbarMenus.map((menu) => (
              <MenuItem
                key={menu.label}
                {...menu}
                sidebarToggleId="navigation-sidebar"
                isCollapsed
              />
            ))}
          </Menu>
        </div>

        <div className="p-4 sticky bottom-0 bg-base-100">
          {isAuthenticated ? (
            <button
              className="btn btn-error btn-outline items-center w-full gap-2 text-primary-content normal-case"
              onClick={handleLogout}
            >
              <FiLogOut className="w-5 h-5" />
              Keluar
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary w-full">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
