import React from "react";
import { Link } from "react-router-dom";

const SingleUpComingEvent = (props) => {
  return (
    <>
      <div

        className="contributors-card mt-3 m-2 text-center rounded ms-3 p-0"
        style={{
          //  border:"1px solid red", 
          width:
            props.data.id === "gurudwara"
              ? "400px"
              : props.data.id === "about"
                ? "300px"
                : "",
        }}
      >
        <div className="gurudwaraImage"
      
        >
          <img
            src={props.data.img}
            // className="a"
            className="img-fluid img-opacity rounded-top a"
            alt=""
          />
        </div>
        <div className=" text-white fw-bold ">
          <Link
            rel="stylesheet"
            to={props.data.link}

            onClick={() => {

              props.data.link > ""
                ? window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                : props.data.place === "outer"
                  ? window.open(props.data.url, "_blank")
                  : props.data.id === "events" ? props.openEventModal(props.data.footerText)
                    : console.log();
            }}
          >
            {" "}
            <p className="fs-5 rounded-bottom color-primary-bg py-2">
              {/* {props.data.footerText} */}
              {"                  "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleUpComingEvent;
