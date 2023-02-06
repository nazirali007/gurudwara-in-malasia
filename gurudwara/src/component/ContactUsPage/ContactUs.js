import React from "react";
import axios from "axios";
import url from "./../../url";
import { useState } from "react";
import {
  GeoAltFill,
  TelephoneForwardFill,
  EnvelopeFill,
  Facebook,
  Twitter,
  PersonFill,
  PencilSquare,
  Youtube,
} from "react-bootstrap-icons";
import SnackbarComponent from "../reusableComponents/SnackbarComponent";
const ContactUs = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    msg: "",
  });
  const { name, email, mobile, msg } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Lenght of nub" + mobile.length);
      if (mobile.length === 10) {
        const res = await axios.post(`${url}/api/v1/gurudwara/contact`, user);
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
        // console.log(res);
        setUser({
          name: "",
          email: "",
          mobile: "",
          msg: "",
        });
      } else {
        // console.log("false");
        setOpenSnackbar(true);

        setMessage("Input valid number....");
        setSeverity("error");
      }
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }
  };

  return (
    <>
      <SnackbarComponent
        open={openSnackbar}
        severity={severity}
        setOpen={setOpenSnackbar}
        message={message}
      />
      <div className="container-fluid p-0 img-container position-relative ">
        <img
          src="/images/contact-us.png"
          className="img-fluid w-100 m-0"
          alt="..."
        />
        <div className="row w-100 position-absolute top-50 left-50 text-white text-center   "></div>
      </div>
      <div className="container-fluid ">
        <div className="row  mt-5 mx-1 text-white d-flex justify-content-center ">
          <div className="col-md-10 p-1">
            <div
              className="border border-dark border-2"
              style={{ backgroundColor: "white" }}
            >
              {/* <iframe
                className="p-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5508849447974!2d74.79383247943292!3d31.618763937584784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919654d5ba331b5%3A0xaea38a65059dc196!2sGurudwara%20Chheharta%20Sahib!5e0!3m2!1sen!2sin!4v1665644796046!5m2!1sen!2sin"
                width="100%"
                Height="350px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <iframe
                className="p-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9074726739887!2d80.9846161!3d26.842895100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2b74b4fbe7%3A0xdb6786658b2bef32!2sGurudwara%20Sachkhand%20Sahib!5e0!3m2!1sen!2sin!4v1667557451131!5m2!1sen!2sin"
                width="100%"
                height="350px"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row d-flex justify-content-evenly">
            <div className="col-md-6 pt-3  mt-3 pb-5 d-flex flex-column align-items-center   mx-1 text-start ">
              <h1 className="text-center text-color-green">Write for us !</h1>

              <div className="mb-3 w-100">
                <label for="exampleFormControlInput1" className="form-label">
                  <PersonFill className="me-2" />
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  name="name"
                  required
                  value={name}
                  placeholder="Enter Your Name..."
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 w-100">
                <label for="exampleFormControlInput2" className="form-label">
                  <EnvelopeFill className="me-2" />
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  value={email}
                  placeholder="Enter Your valid Email..."
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 w-100">
                <label for="exampleFormControlInput3" className="form-label">
                  <TelephoneForwardFill className="me-2" />
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  name="mobile"
                  required
                  value={mobile}
                  placeholder="Enter Your 10 Digits of Number..."
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 w-100">
                <label for="exampleFormControlTextarea4" className="form-label">
                  <PencilSquare className="me-2" />
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  required
                  value={msg}
                  onChange={(e) => onInputChange(e)}
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn-primary align-self-center bg-button-yellow"
                style={{ width: "100px" }}
              >
                Send
              </button>
            </div>

            <div className="col-md-5 mt-3  text-start  p-3">
              <div>
                <h1 className="text-color-green">Meet us here</h1>
                <p>
                  <GeoAltFill className="me-3" />
                  Guru Nanak Satsang Sabha, 3-B Vipul Khand-6 Gomti Nagar,
                  Lucknow-226010
                </p>
                <p>
                  <EnvelopeFill className="me-3" /> gurdwaragomtinagar@gmail.com
                </p>
                <p>
                  {" "}
                  <TelephoneForwardFill className="me-3" />
                  (+91) 9889967120
                </p>
                {/* <h1 className="text-color-green">Helpline Desk</h1>
              <p>
                {" "}
                <TelephoneForwardFill className="me-3" />
                (406) 555-0120
              </p> */}
              </div>

              <div className="row d-flex justify-content-start">
                <div className="follow  mt-3 mt-md-1 ">
                  <h3 className="text-color-green">Follow Us</h3>
                  <p>
                    <span className="">
                      <a
                        href="https://www.facebook.com/gurdwaragomtinagar"
                        target="_blank"
                        className="text-dark"
                      >
                        <Facebook />
                      </a>
                    </span>
                    <span className="ms-3">
                      <a
                        href="https://twitter.com/GGN_Lucknow?t=Opj6St8BbwWac9BznneqVA&s=09"
                        target="_blank"
                        className="text-dark"
                      >
                        <Twitter />
                      </a>
                    </span>
                    <span className="ms-3">
                      <a
                        href="https://youtube.com/c/GurdwaraSachkhandSahibGomtinagar"
                        target="_blank"
                        className="text-dark"
                      >
                        <Youtube />
                      </a>
                    </span>
                  </p>

                  <div
                    className="d-flex justify-content-start mt-3  "
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
