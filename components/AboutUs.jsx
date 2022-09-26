import React from "react";
import Phone from "./svgs/Phone";
import AboutCover from "./svgs/AboutUs";
import AboutUsBG from "./svgs/AboutUsBG";
import AboutUsComponentBg from "./svgs/AboutUsComponentBg";
function AboutUs() {
  return (
    <div className="row mx-0 viewh-60  bg-gradient-linear-dark-alt relative">
      <AboutUsBG />
      <div className="col-12 d-flex justify-content-center align-items-center p-5">
        <div className="container relative h-100 aboutUs bg-gradient-linear-dark">
          <AboutUsComponentBg />
          <div className="t1">
            <h2 className="teal title">¿Quiénes</h2>
          </div>
          <div className="t2">
            <h2 className="teal title">somos?</h2>
          </div>
          <div className="p">
            <h3 className="white align-text-end">
              Más que una agencia <br/> de marketing, somos tu equipo de
              posicionamiento online.
            </h3>
          </div>
          <div className="c">
            <AboutCover />
          </div>
          <div className="b">a</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
