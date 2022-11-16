import React from "react";

const Fotos = (props) => {
  return (
    <>
      <div key={props.id} className=" col-lg-3 col-md-4 col-6">
        <a
          href={props.id}
          className=""
          data-bs-toggle="modal"
          data-bs-target={"#id" + props.id}
        >
          <img
            src={props.img}
            className="card-img-top my-2 rounded"
            alt="..."
            height="368px"
          />
        </a>
      </div>
      <div
        className="modal fade"
        id={"id" + props.id}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="d-flex justify-content-end m-2">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-dialog">
          <img src={props.img} className="card-img-top rounded" alt="..." />
        </div>
      </div>
    </>
  );
};

export default Fotos;
