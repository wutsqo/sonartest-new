import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { MenuItem } from "../Menu";

const NavbarItem = ({ route, label, subMenus }) => {
  const { pathname } = useLocation();

  if (route === "#") {
    return (
      <li className="dropdown dropdown-hover shrink-0">
        <button className="btn btn-ghost text-base font-normal">
          <span>{label}</span>
          <GoChevronDown />
        </button>
        <ul className="dropdown-content menu bg-base-100 rounded-box shadow-lg min-w-max text-base-content z-50" key={pathname}>
          {subMenus.map((subMenu) => (
            <MenuItem key={subMenu.label} {...subMenu} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <Link to={route} className="btn btn-ghost text-base font-normal shrink-0">
      {label}
    </Link>
  );
};

NavbarItem.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string.isRequired,
  subMenus: PropTypes.array,
};

export default NavbarItem;
