import React, { useEffect, useState } from "react";
import SingleUpComingEvent from "../reusableComponents/SingleUpComingEvent";
import { gurudwaraLko } from "../reusableComponents/DataApi";
import BannerUsable from "../reusableComponents/BannerUsable";
import { home } from "../reusableComponents/DataApi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import img0 from "../../asset/images/img0.jpeg"
import url from "../../url";

const Home = () => {
  const [donateesData, setDonateesData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const apiUrl = `${url}/api/v1/donation`;
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const apiData = await axios.get(apiUrl);
      // console.log(apiData.data.data);
      setDonateesData(apiData.data.data);
      // console.log(apiData.data.data);
      // console.log("donatees data", donateesData);
    } catch (error) {
      // console.log(error.msg);
    }
  };
  const apiUlrLiveEvents = `${url}/api/v1/events/current/month`;
  const getEventData = async () => {
    try {
      const apiData = await axios.get(apiUlrLiveEvents);
      // console.log(apiData.data.data);
      setEventsData(apiData.data.data);
      // console.log(apiData.data.data);
      // console.log("events data .....", eventsData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [hukumnamaData, setHukumnanaData] = useState([]);
  const getHukumnamaData = async () => {
    try {
      const hukumnamaApiData = await axios.get(`${url}/api/v1/hukamnama`);
      console.log(hukumnamaApiData.data.data);
      setHukumnanaData(hukumnamaApiData.data.data);
      // console.log(".......data of hukumnama.....", hukumnamaData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const hukamNamaImg = () => {
    navigate(`/hukamnama/${hukumnamaData.photo}`);
  };

  const date = new Date();
  const day = `${date.getDate()}`;
  console.log("day of date...", date.getDate());
  const month = `${date.getMonth() + 1}`;
  let dayNum = "";
  let monthNum = "";
  if (day.length === 1) {
    dayNum = `0${day}`;
  }
  if (month.length === 1) {
    monthNum = `0${month}`;
  }
  //  let currentDate="";
  let currentDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  //  currentDate = `${dayNum}/${monthNum}/${date.getFullYear()}`;

  useEffect(() => {
    getData();
    getEventData();
    getHukumnamaData();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <BannerUsable data={home} />
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly p-2 pt-5">
          <div className="col-md-7 text-start">
            <h5 className=" text-start text-color-orange fs-2 fw-bolder">
              Gurudwaras in Malaysia{" "}
            </h5>
            <p className="lh-lg pt-4  fs-5 text-justify text-wrap">
              Singhs and Kaurs Society Malaysia, a community of Sewadars
              (Volunteers) established over the past 19 years wants to serve the
              Malaysian Indian Communities. We hope to promote connectivity and
              act as one on bringing the idea of wellness, spirituality and
              abundance into our lives. Singhs and Kaurs Society Malaysia aims
              to educate ourselves, our peers and our generation to uphold
              Indian languages, cultures, religions and thrive to give back to
              the community as active volunteers.
            </p>
            <p className="lh-lg pt-3  fs-5 text-justify text-wrap">
            Focused on the essential elements of wellbeing.
A holistic approach to living life with meaning, vigour and social connectivity.


            </p>
          </div>
          <div
            className="col-md-4    d-flex align-items-center flex-column pt-2"
            style={{ height: "550px" }}
          >
            <div className="py-2">
              {/* <h4 className="text-bold text-color-orange">HUKUMNAMA</h4>
              <p className="text-center fs-lighter">
                <span className="color-text-blue">
                  hukumnamaData.hukamnamaDate
                  {!hukumnamaData ? currentDate : hukumnamaData.hukamnamaDate}
                </span>
              </p>
              <hr /> */}
              <img src={img0} height="100%"  width={"100%"}/>
            </div>
            <div className="text-center text-md-start overflow-auto h-75 ">
              {/* {!hukumnamaData ? (
                <p> "Today's Hukumnama will be updated soon"</p>
              ) : !hukumnamaData.hukamnamaText ? (
                <img
                  src={`${url}/api/v1/image/${hukumnamaData.photo}`}
                  className="img-fluid"
                  alt=""
                />
              ) : (
                <p>{hukumnamaData.hukamnamaText}</p>
              )} */}
            </div>
          </div>

          <div className="col-md-7 text-start"></div>
          <div className="col-md-4 text-center">
            {/* {hukumnamaData ? (
              <p>
                {" "}
                If you want to see the full Image of the Hukamnama{" "}
                <span
                  onClick={() => hukamNamaImg()}
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                >
                  click here
                </span>{" "}
              </p>
            ) : (
              <p>Hukamnama Image will be updated soon</p>
            )} */}
          </div>
        </div>
      </div>

      <div className="mt-md-4">
        {/* <hr/> */}
        <h2 className="mt-5 mb-3 text-center text-color-orange-dark">
          Gurudwara Sahib in Lucknow
        </h2>
      </div>
      <div className="container-fluid gurudwara-home-gradient py-2">
        <div className="row d-flex flex-wrap justify-content-evenly mt-4 p-3">
          {
            /* console.log(events) */
            gurudwaraLko.map((data) => {
              return <SingleUpComingEvent data={data} />;
            })
          }
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row justify-content-evenly">
          <div className="col-md-5 text-start mt-5 ">
            <h4>List of Donatees</h4>
            <p className="fs-5">
              {" "}
              <span style={{ color: "#FF0505" }}>
                ( Want to donate? <ArrowRightCircle />{" "}
              </span>
              <Link to="/Donate" onClick={goToTop}>
                <span className="fs-6" style={{ color: "#0D8353" }}>
                  Online Payment Gateway)
                </span>
              </Link>
            </p>
            <div className="overflow-auto h-75 h-md-50">
              <table className="table table-striped table-hover shadow">
                <thead style={{ backgroundColor: "#E7740A" }}>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {donateesData.map((data) => {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.donationAmount}/- </td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* <div className="row d-flex justify-content-center justify-content-md-end">
              <button
              type="button"
              class="btn btn-primary bg-button-yellow w-25 me-md-3"
              >
              See More
              </button>
            </div> */}
          </div>
          <div className="col-md-5 text-start mt-5 ">
            <h4>News and Events</h4>
            <p className="fs-5">
              {" "}
              <span style={{}}>
                All Upcoming Events by Gurudwara Sachkhand Sahib{" "}
              </span>
            </p>
            <div className="overflow-auto h-75 h-md-25">
              <table className="table table-striped table-hover shadow">
                <thead style={{ backgroundColor: "#E7740A" }}>
                  <tr>
                    <th scope="col" colspan="3">
                      List of all News and Gurudwara Events
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {eventsData.map((data) => {
                    return (
                      <tr>
                        <td>{data.eventName}</td>
                        <td>{data.eventDate}</td>
                        <td>{data.month}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
