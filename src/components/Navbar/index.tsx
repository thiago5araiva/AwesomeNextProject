import React from "react";
import Link from "_components/link";
import Image from "next/image";

import styles from "./styles.module.scss";

const NavbarComponent = () => {
  return (
    <nav className={`navbar ${styles.navbar} fixed-top`}>
      <div className="container">
        <Link href={"/"}>
          <Image
            src={require("@/assets/images/navbar-logo.png")}
            alt="Picture of the author"
            width={144}
            height={39}
          />
        </Link>
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
            <Link
              className="nav-link active"
              aria-current="page"
              href={"/"}
              label="Home"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
