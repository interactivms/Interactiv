import React, { useState } from "react";
import ImgContainer from "./ImgContainer";
import VideoPopup from "./VideoPopup";
import Carousel from "react-grid-carousel";
import Testimony from "./Testimony";
import Logo from "./svgs/Logo";
function OurWork() {
  const [selected, setSelected] = useState(null);

  const closeDialog = () => {
    setSelected(null);
  };
  return (
    <div className="bg-last-section py-5">
      <div className="row mx-0 viewh-80 py-2">
        <h2 className="teal title text-center py-5">EXPLORA</h2>
        <VideoPopup open={selected != null} handleClose={closeDialog} />
        <div className="col d-flex justify-content-center align-items-center">
          <div className="container workGrid w-100 h-100 overflow-hidden">
            <ImgContainer
              source="https://source.unsplash.com/random/900x900?sig=1"
              select={setSelected}
              position="r1"
            />
            <ImgContainer
              source="https://source.unsplash.com/random/500x300?sig=4"
              isImage={true}
              position="r2"
            />
            <ImgContainer
              source="https://source.unsplash.com/random/600x600?sig=2"
              select={setSelected}
              position="r4"
            />

            <ImgContainer
              source="https://source.unsplash.com/random/500x300?sig=5"
              isImage={true}
              position="r3"
            />
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="row mx-0 viewh-40">
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
      </div>
      <br />
      <div className="row mx-0 viewh-40 py-3">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <Logo />
          <br />
          <h2 className="title teal">
            CONTÁCTANOS
          </h2>
          <p className="white">Hacemos una cotización a tu medida.</p>
          <textarea className="contact-textArea p-2 white" name="" id="" cols="30" rows="10" placeholder="Mensaje..."></textarea>
          <br />
          <input className="contact-input p-2 white" type="text" placeholder="Correo..." />
          <br />
          <button className="white bg-teal contactButton px-3 py-2">Contactar</button>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
