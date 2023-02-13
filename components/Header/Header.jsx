import React from "react";
import { Container } from "reactstrap";
import classes from "./Header.module.css";
import Link from "next/link";

const NAV_LINK = [
  {
    path: "./",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#Portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <Container>
        {/* ======navigation Logo ======*/}
        <div className={`${classes.nav__wrapper}`}>
          <div className={`${classes.logo}`}>
            <h1>
              <span>M</span>yuju
            </h1>
          </div>
          {/* ======navigation Menu ======*/}
          <div className={`${classes.navigation}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV_LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  {" "}
                  <i class="ri-phone-line"></i>+ 821090320363{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
