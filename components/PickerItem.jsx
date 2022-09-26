import React, { useState, useEffect } from "react";
import Price from "./Price";

function PickerItem({options, setPricing, info, setInfo}) {

  const selectService = (service) => {
    setPricing(null)
    setInfo(service)
  }
  return (
    <>
        <div className="row mx-0">
      <div className="col d-flex flex-column justify-content-center align-items-center">
        {info && (
          <>
            <h2 className="white subtitle">{info.title}</h2>
            <br />
            <h4 className="white subtitleText">
              {info.text}
            </h4>
            <br />
            {info.pricing ? 
            <>
              <button className="white bg-teal br-25 px-3 py-2 subtitleText" onClick={() => setPricing(info)}>COSTOS</button>
            </>
            :
            <>
              <p className="white">Contáctanos para una cotización personalizada.</p>
            </>}
          </>
        )}
      </div>
      <div className="col ">
        <div className="row mx-0">
          {options.map((option, key) => (
            <div
              className="col-6 p-3 relative itemContainer"
              onClick={() => selectService(option)}
              key={key}
            >
              <div className={info?.name === option.name ? "bg-gradient-linear-dark-alt p-2 h-100 br-25 d-flex flex-column justify-content-center align-items-center pointer selected" : "bg-gradient-linear-dark-alt d-flex flex-column justify-content-center align-items-center p-2 h-100 br-25 pointer"}>
                <img className="itemImg mx-auto" src={option.img} alt="" />
                <h3 className="white text-center">{option.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
}

export default PickerItem;
