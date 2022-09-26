import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function index() {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <h2>Últimas Publicaciones</h2>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

index.layout = AdminLayout;
