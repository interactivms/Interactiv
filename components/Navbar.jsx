import React from "react";
import Logo from "./svgs/Logo";
import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar-main row mx-0 p-5 d-flex">
      <div className="col-12 col-sm-12 col-md-12 col-lg d-flex justify-content-center align-items-center py-2">
          <Logo />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg desktop-menu d-flex justify-content-center align-items-center py-2 no-mobile">
        <ul className="w-100 d-flex flex-row flex-wrap justify-content-between">
          <li className="teal p-1">
            <Link href="aboutUs">CONÓCENOS</Link>
          </li>
          <li className="teal p-1">
            {" "}
            <Link href="services">SERVICIOS</Link>
          </li>
          <li className="teal p-1">
            {" "}
            <Link href="blog">BLOG</Link>
          </li>
          <li className="teal p-1">
            {" "}
            <Link href="contact">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
