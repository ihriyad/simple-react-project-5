import React, { useState } from "react";
import NavLink from "./navlink";
import { Menu, X } from "lucide-react";

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
const Links = navItems.map((route) => (
  <NavLink route={route} key={route.id}></NavLink>
));
const MyNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="nav-left md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu></Menu>}
        <ul>
            {Links}
        </ul>
      </div>
      <ul className="md:flex space-x-5 p-5 hidden">{Links}</ul>
      <button className="btn btn-primary">Sign In</button>
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
