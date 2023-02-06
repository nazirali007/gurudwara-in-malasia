import React from "react";
import { useParams } from "react-router-dom";
import url from "../../url";

const HukamnamaImg = () => {

  const {img} = useParams()
// console.log(img)

  return (
    <>
      <div className="container py-5">
        <div className="row">
    
          <div className="col-md-12 d-flex justify-content-center ">
          
            <img
              src={`${url}/api/v1/image/${img}`}
              className="img-fluid shadow"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HukamnamaImg;
