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
      <div className="md:hidden">
        <span className="cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}
        </span>
        <ul className={`${open ? "block" : "hidden"} mt-3`}>{Links}</ul>
      </div>

      <ul className="md:flex space-x-5 p-5 hidden">{Links}</ul>
      <button className="btn btn-primary">Sign In</button>
    </nav>
  );
};

export default MyNavbar;
