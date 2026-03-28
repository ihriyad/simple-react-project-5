import React from "react";
import NavLink from "./navlink";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const MyNavbar = () => {
  return (
    <nav>
     <ul className="flex space-x-5">
         {navItems.map((route) => (
        <NavLink route={route} key={route.id}></NavLink>
      ))}
     </ul>
      {/* <ul className="flex space-x-5">
        {navItems.map((route) => (
          <li>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <ul className="flex space-x-4">
        <li>Home</li>
        <li>Login</li>
        <li>Support</li>
      </ul> */}
    </nav>
  );
};

export default MyNavbar;
