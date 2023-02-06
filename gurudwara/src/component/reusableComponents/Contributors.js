import React from "react";
import { TelephoneForwardFill, PersonWorkspace } from "react-bootstrap-icons";

const Contributors = (props) => {
  return (
    <>
      <div className="bg-light text-dark contributors-card mt-3 m-2 text-center">
        <div className="  d-flex justify-content-center mt-3 img-container">
          <img
            src="/images/shivam.jpg"
            className="img-fluid image-circle"
            alt=""
          />
        </div>
        <div className="ms-5 mt-3">
          <p className="">
            <label className="fw-bold text-color-green">
              {" "}
              {props.data.name}
            </label>{" "}
            <br />
            <label className="">
              {" "}
              <span className="me-2">
                {" "}
                <TelephoneForwardFill />{" "}
              </span>
              {props.data.number}
            </label>
            <br />
            <label className="">
              {" "}
              <span className="me-2">
                {" "}
                <PersonWorkspace />{" "}
              </span>{" "}
              Age - {props.data.age}{" "}
            </label>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contributors;
