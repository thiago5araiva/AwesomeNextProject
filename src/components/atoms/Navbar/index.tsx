import Link from "@atoms/Link";
import React from "react";

type NavbarType = {
  customStyle?: string;
};

const NavbarComponent = ({ customStyle }: NavbarType): JSX.Element => {
  const routes = [
    { name: "Ínicio", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Pacotes", href: "/pacotes" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {routes.map((route, index) => (
              <Link key={index} href={route.href} label={route.name} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponent;
