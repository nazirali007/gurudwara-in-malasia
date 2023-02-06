import React from "react";
import { Facebook, Twitter, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import img0 from "../../asset/images/logo.png"
const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container-fluid color-primary-bg">
        <div className="row text-white text-center text-md-start pt-5">
          <div className="col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
            {" "}
            <Link to="/" onClick={goToTop}>
              <img
                src={img0}
                className="img-fluid logo-img pb-5 ms-md-5 footer-logo"
                alt="logo"
              />{" "}
            </Link>
          </div>
          <div className="col-md-4">
            <h4 className="fw-1">Important links</h4>
            <Link to="/" onClick={goToTop}>
              <p>Home</p>
            </Link>
            <Link to="/About" onClick={goToTop}>
              <p>About Us</p>
            </Link>



            <Link to="/Contact_Us" onClick={goToTop}>
              <p>Contact Us</p>
            </Link>

            <Link to="/UpcomingEvent" onClick={goToTop}>
              <p>Upcoming Events</p>
            </Link>

            <Link to="/Basic_Articles" onClick={goToTop}>
              <p>Sikhism</p>
            </Link>

            <Link to="/sri-guru-nanak-ji" onClick={goToTop}>
              <p>Dharam Prachar</p>
            </Link>


            <Link to="/Donate" onClick={goToTop}>
              <p>Donation</p>
            </Link>


            <Link to="/colleges" onClick={goToTop}>
              <p>Sikh colleges/ Gurudwara sahib</p>
            </Link>

            



           
          
          </div>
          <div className="col-md-4">
            <h4 className="fw-1">Address</h4>
            <p class="lh-sm">
            43, Jalan P8B/1, Presint 8, <br /> 62250 W.P Putrajaya,<br /> Malaysia
            </p>
            <h4 className="fw-1">Helpline No.</h4>
            <p>+91 9889967120</p>
            <h4 className="fw-1">Follow Us</h4>
            <p>
              <a
                href="https://www.facebook.com/gurdwaragomtinagar"
                className="fs-4 me-2"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/GGN_Lucknow?t=Opj6St8BbwWac9BznneqVA&s=09"
                className="fs-4 me-2"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                href="https://youtube.com/c/GurdwaraSachkhandSahibGomtinagar"
                className="fs-4 me-2"
                target="_blank"
              >
                <Youtube />
              </a>
            </p>

            <p class="lh-sm">

        <Link to = 'privacy-policy' onClick={goToTop} > Privacy Policy </Link>   / <Link to='terms-&-conditions' onClick={goToTop}>Terms & Conditions</Link> 
            </p>




          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
