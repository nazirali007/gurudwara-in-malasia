import React , {useState,useEffect} from "react";
import axios from "axios";
import "./LiveTeleCast.css";
import url from '../../url'
const LiveTeleCast = () => {
const [liveLink,setLiveLink] = useState([]);


  const getLinks = async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/links/`);
      console.log(data.data);
      setLiveLink([data.data[0].linkUrl,data.data[1].linkUrl]);
      console.log("data..", data.data);
    } catch (error) {
      console.log("error....",error);
    }
  };

  if(liveLink)
  {
    console.log("...livelink",liveLink);
  }
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <>
      <div className="container mt-5 pt-4 mb-5 main-div7">
        <div className="jumbotron">
          <div className="row p-3">
            <div className="col-md-8 col-sm-12 livevdo">
             
              <a href={`${liveLink[0]}`} target="_blank">
                <img src="./images/live-telecast-banner-image.jpg"
               
                style={{height:"100%",width:"100%"}}
                ></img>
              </a>
            </div>
            <div className="col-md-4 col-sm-12 pt-4 ">
              <p className="text6 px-4">
                It is the preeminent spiritual site of Sikhism. It is one of the
                holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib
                Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana
                Sahib. The man-made pool on the site of the temple was completed
                by the fourth Sikh Guru, Guru Ram Das, in 1577.
              </p>
              <div className="col col-sm-12 pt-4 ">
                

                <div className="row p-5 d-flex justify-content-center gap-2">
                  <button className="  btn btn-light text-dark livebtn">
                    <a href={`${liveLink[0]}`} target="_blank">
                      Lucknow Gurudwara Sahib Live
                    </a>
                  </button>

                  <button className=" btn btn-light livebtn">
                    <a href={`${liveLink[1]}`} target="_blank">
                      Amritsar Gurudwara Sahib Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LiveTeleCast;
