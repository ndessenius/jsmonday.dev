import * as React from "react";
import Link from "gatsby-link";
import "./Menu.styl";

const menuItems = [
  {
    link: "/",
    name: "home"
  },
  {
    link: "/articles",
    name: "articles"
  },
  {
    link: "/authors",
    name: "authors"
  },
  {
    link: "/patrons",
    name: "patrons"
  }
];

export default function Menu() {
  return (
    <div className="jsm-menu">
      {menuItems.map(item => (
        <Link to={item.link} className="jsm-menu-item" key={item.name}>
          /{item.name}/
        </Link>
      ))}
    </div>
  );
}
