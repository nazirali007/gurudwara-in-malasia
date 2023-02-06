import React, { useState } from "react";
import SingleUpComingEvent from "../../reusableComponents/SingleUpComingEvent";
import LetestUpComingEvents from "../../reusableComponents/LetestUpComingEvents";
import { events } from "../../reusableComponents/DataApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../reusableComponents/style.css";
import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import url from "../../../url";

const UpcomingEvent = () => {
  const [event, setEevent] = useState();
  const [showEventModal, setShowEventModal] = useState(false);

  const [month, setMonth] = useState("ss");

  const handleCloseEventModal = () => setShowEventModal(false);
  const handleShowEventModal = () => setShowEventModal(true);
  const [eventData, setEventData] = useState([]);

  const getEvents = async (e) => {
    try {
      const { data } = await axios(`${url}/api/v1/events`);
      // console.log(data);
    } catch (error) {}
  };
  const openEventModal = async (month) => {
    // console.log(month);
    setMonth(month);
    const res = await axios.post(`${url}/api/v1/events/month`, {
      month: month,
    });
    // console.log(res);

    setEventData(res.data.data);

    handleShowEventModal();
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 p-3 p-md-5">
            <h2 className="text-center text-md-start ">Festivals in 2022</h2>
            <div className="col-md-5 d-block d-md-none">
              <img src="/images/EventsImg.png" className="img-fluid " alt="" />
            </div>
            <p className="text-start">
              Sikhism is one of the important religions in India and there are
              many festivals celebrated by Sikh/Punjabi community. Most of the
              Sikh festivals are events to commensurate the birth and teachings
              of 10 gurus of Sikhs and their teachings. The birthdays of all
              Gurus especially the first and last Sikh Guru is celebrated on a
              grand level. The other festivals that hold significant importance
              in Sikh festival calendar are Baisakhi, Hola Mohalla and Diwali.
              Sikhs practice worshipping an omnipresent divine power. They
              rather venerate their Gurus, various milestones achieved by the
              gurus and their teachings. Some of the Hindu festivals like Diwali
              are also celebrated by the Sikhs but with a completely different
              reason and philosophy.
            </p>
          </div>
          <div className="col-md-5 d-none d-md-block ">
            <img
              src="/images/EventsImg.png"
              className="img-fluid mt-5 "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <h3 className="text-center text-md-start ms-md-5">
          All festivals according to month
        </h3>
        <div className="row d-flex flex-wrap justify-content-evenly mt-5">
          {
            /* console.log(events) */
            events.map((data, index) => {
              return (
                <SingleUpComingEvent
                  openEventModal={openEventModal}
                  key={index}
                  data={data}
                />
              );
            })
          }
        </div>
      </div>

      <div className="container-fluid  p-5 ">
        <h2>Others</h2>
        <div className="row">
          <LetestUpComingEvents />
        </div>

        <Modal show={showEventModal} onHide={handleCloseEventModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <p className="">{month}</p>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>

              <tbody>
                {eventData &&
                  eventData.map((item) => {
                    return (
                      <tr>
                        <td>{item.eventName}</td>
                        <td>{item.eventDate}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEventModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* <div className="row">
                <h3 className="first-heading2 text-center pt-4 mb-5" >Others</h3>
              </div> */}

      {/* <div className="row d-flex justify-content-between" style={{backgroundColor:"#F97201"}}>
                <div className="col-md-3">
                    <div className="card cardbox" style={{width: "100%"}}>
                        <img src="/images/demo.png" className="card-img-top" alt="..." style={{ maxWidth:"100%",minWidth:"100%"}}/>
                        <div className="card-body">
                          <p className="card-text text-center text4">Donatees</p>
                        </div>
                      </div>   
                </div>
                <div className="col-md-3 ">
                    <div className="card cardbox" style={{width: "100%"}}>
                        <img src="/images/demo5.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text text-center text4">Upcoming Events</p>
                        </div>
                      </div>  
                </div>
                <div className="col-md-3 ">
                    <div className="card cardbox" style={{width: "100%"}}>
                        <img src="/images/demo12.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text text-center text4">Sikh colleges in India</p>
                        </div>
                      </div>  
                </div>
                <div className="col-md-3 ">
                    <div className="card cardbox" style={{width: "100%  "}}>
                        <img src="/images/demo6.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text text-center text4">Gurudwaras in India</p>
                        </div>
                      </div>   
                </div>
             </div> */}
    </>
  );
};

export default UpcomingEvent;
