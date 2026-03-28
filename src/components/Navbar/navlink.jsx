import React from "react";

const NavLink = ({ route }) => {
  return (
    <div className="hover:text-cyan-400">
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default NavLink;
