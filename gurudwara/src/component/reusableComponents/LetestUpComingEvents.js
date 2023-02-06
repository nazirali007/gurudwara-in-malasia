// import React from "react";
import Slider from "react-slick";
import SingleUpComingEvent from "./SingleUpComingEvent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aboutGurudwara, events } from "./DataApi";

const LetestUpComingEvents = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <>
    //   <div>
        
    //     <Slider {...settings}>
    //       {
    //         /* console.log(events) */
    //         events.map((data) => {
    //           return (
    //             <div className=" mt-3 m-2 mb-0 pb-0   p-3  d-flex justify-content-center">
    //               <div className=" mb-3 me-3" >
    //                 <img
    //                   src={data.img}
    //                   className="img-fluid img-opacity"
    //                   alt=""
    //                 />

    //                 <div className=" text-white fw-bold img-fluid text-center" >
    //                   <p className="fs-4 color-primary-bg py-1">{data.footerText}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })
    //       }
    //     </Slider>
    //   </div>
    // </>/
    <>
    <div className="container-fluid  py-2 bg-color-yellow" >
        <div className="row d-flex flex-wrap justify-content-evenly">
          {
            /* console.log(events) */
            aboutGurudwara.map((data) => {
              return <SingleUpComingEvent data={data} />;
            })
          }
        </div>
      </div>
    </>
  );
};

export default LetestUpComingEvents;
