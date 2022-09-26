import React, { useState, useRef } from "react";
import Carousel from "react-grid-carousel";
import Testimony from "./Testimony";
function Testimonials() {
  const carousel = useRef(null);

  const move = (val) => {
    style = {
      transform: `translateX(${20 * val}px)`,
    };
    carousel.current.styles.transform;
  };
  return (
    <div className="row mx-0 viewh-40 bg-gradient-linear-dark-alt">
      <h2 className="teal title text-center py-5">CLIENTES SATISFECHOS</h2>
      <div className="col d-flex justify-content-center align-items-center">
        <div className="container px-0">
          <Carousel cols={3} rows={1} gap={1} loop>
            <Carousel.Item>
              <Testimony
                client="COLEGIO HIGHLAND"
                clientText="Tremendo servicio de estos muchachos"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Testimony
                client="Invernaderos Mesagrande"
                clientText="Nos hicieron un servicio
                            de produccion audiovisual
                            y la verdad es que 
                            quedamos encantados.
                            Muchas Gracias”"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Testimony
                client="E - Manifiesto"
                clientText="“Muy buenos video Leads
                para la campaña que 
                se desarrollaron."
              />
            </Carousel.Item>
            <Carousel.Item>
              <Testimony
                client="COLEGIO HIGHLAND"
                clientText="Tremendo servicio de estos muchachos"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Testimonials;
