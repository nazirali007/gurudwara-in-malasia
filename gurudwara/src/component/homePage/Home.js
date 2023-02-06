import React, { useEffect, useState } from "react";
import SingleUpComingEvent from "../reusableComponents/SingleUpComingEvent";
import { gurudwaraLko } from "../reusableComponents/DataApi";
import BannerUsable from "../reusableComponents/BannerUsable";
import { home } from "../reusableComponents/DataApi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
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
const day = `${date.getDate()}` 
console.log("day of date...",date.getDate());
const month = `${(date.getMonth() + 1) }`
let dayNum = "";
let monthNum = "";
if (day.length === 1)
{
  dayNum = `0${day}`
}
if(month.length === 1)
{
  monthNum =`0${month}`
}
//  let currentDate="";
let currentDate = date.getDate() +"/"+ (date.getMonth() + 1)  +"/"+ date.getFullYear();
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
              Gurudwara Sahib Gomti Nagar{" "}
            </h5>
            <p className="lh-lg pt-4  fs-5 text-justify text-wrap">
              गुरुद्वारा सचखंड साहिब गोमती नगर लखनऊ में विपुल खंड -6 में स्थित
              है । 90 के दशक में गोमती नगर के गुरु नानक नाम लेवा सांगतो ने गुरु
              नानक सत्संग सभा का गठन किया , जिसका उद्देश्य घर-घर जाकर श्री
              सुखमनी ! साहिब जी के पाठ कराना एवं आपस में मेलजोल बढ़ाना था । इसी
              संस्था ने वर्ष 2002 से गोमती नगर में गुरुद्वारा साहिब की स्थापना
              का प्रयास शुरू किया ।
            </p>
            <p className="lh-lg pt-3  fs-5 text-justify text-wrap">
              वर्ष 2003 में सोसाइटी रजिस्ट्रेशन एक्ट(21)1960 के अंतर्गत श्री
              गुरु नानक सत्संग सभा नामक संस्था का रजिस्ट्रेशन कराया गया । यह
              संस्था गुरुद्वारा सचखंड साहिब का संचालन करती है । वर्ष 2004-5 में
              गुरुद्वारा साहिब बनकर तैयार हुआ और 11 सितंबर 2004 को प्रथम बार
              श्री गुरु ग्रंथ साहिब जी का प्रकाश गुरुद्वारा सचखंड साहिब में किया
              गया , तब से लगातार पाठ कीर्तन लंगर गुरुपुरबों का आयोजन गुरुद्वारा
              साहिब में आयोजित किया जा रहा है । वर्ष 2009 में गुरुद्वारा साहिब
              का पुनः निर्माण / विस्तार किया गया । गुरुद्वारा साहिब द्वारा
              निशुल्क होम्योपैथिक क्लीनिक एवं पंजाबी भाषा तथा सिख धर्म के प्रचार
              प्रसार के कार्य किए जा रहे हैं ।
            </p>
          </div>
          <div
            className="col-md-4  border-color-blue  d-flex align-items-center flex-column pt-2"
            style={{ height: "550px" }}
          >
            <div className="py-2">
              <h4 className="text-bold text-color-orange">HUKUMNAMA</h4>
              <p className="text-center fs-lighter">
                <span className="color-text-blue">
                {/* hukumnamaData.hukamnamaDate */}
                  {!hukumnamaData ? currentDate : hukumnamaData.hukamnamaDate }
                </span>
              </p>
              <hr />
            </div>
            <div className="text-center text-md-start overflow-auto h-75 ">
            
                {!hukumnamaData
                  ? ( <p> "Today's Hukumnama will be updated soon"</p> )
                 : !hukumnamaData.hukamnamaText ? ( <img src={`${url}/api/v1/image/${hukumnamaData.photo}`} className="img-fluid" alt="" /> ) : (<p>{hukumnamaData.hukamnamaText}</p>) }
            
            </div>
          </div>

          <div className="col-md-7 text-start"></div>
          <div className="col-md-4 text-center">
            {hukumnamaData ? (
              <p>
                {" "}
                If you want to see the full Image of the Hukamnama{" "}
                <span onClick={() => hukamNamaImg()} className="text-primary" style={{cursor:'pointer'}}>
                  click here
                </span>{" "}
              </p>
            ) : (
              <p>Hukamnama Image will be updated soon</p>
            )}
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
