import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../asset/images/logo.png";

const Navbar = () => {
  const [fix, setFix] = useState({});
  window.onscroll = function (e) {
    // console.log(window.scrollY); // Value of scroll Y in px
    if (window.scrollY > 100) {
      setFix({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      });
    } else {
      setFix({
        position: "static",
      });
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-start align-items-center top-logo ">

      <Link to="/">
      
      <img width={100} src={img1} alt="logo"/>
        </Link>
        <h1 className=" text-white  mx-auto logo-text  " style={{fontFamily: `'Poppins', sans-serif`}}>GURDWARA IN MALAYSIA</h1>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={fix}
      >
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0 text-center text-center">
              <li className="nav-item ms-2  ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-2 ">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown ms-2 ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sikhism
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Basic_Articles">
                      Basic Articles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Main_Article">
                      Main Articles
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="Sword_in_Sikhism">
                      Sword in Sikhism
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/Duties_of_the_Khalsa">
                      Duties of the Khalsa
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/Gurpurbs">
                      Gurpurbs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Glossary">
                      Glossary
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown ms-2 ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="DharmPrachar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dharam Parchar
                </Link>
                <ul className="dropdown-menu" aria-labelledby="DharmPrachar">
                  <li>
                    <Link className="dropdown-item" to="/sri-guru-nanak-ji">
                      Guru Sahiban
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Panj_Takht">
                      Panj Takht
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Panj_Kakars">
                      Panj Kakars
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown ms-2 ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="DharmPrachar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Donation
                </Link>
                <ul className="dropdown-menu" aria-labelledby="DharmPrachar">
                  <li>
                    <Link className="dropdown-item" to="/Donate">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Akhand_Path_Registration"
                    >
                      Akhand Path Registration
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/General_Information">
                      General Information
                    </Link>
                  </li>
                </ul>
              </li>

               {/* <li className="nav-item dropdown ms-4">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > Event
                  
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                <li>
                    <Link className="dropdown-item" to="/UpcomingEvent">
                      Upcoming Event
                    </Link>
                  </li>
                  
                </ul>
              </li>  */}
              <li className="nav-item ms-2 ">
                <Link  className="nav-link" to="/UpcomingEvent">
                Events
                </Link>
              </li>
              <li className="nav-item dropdown ms-2 ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                 {/* Colleges/Gurudwars Sahib */}
                 Gurdwara Sahib Putrajaya
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li>
                      <Link className="dropdown-item" to="/colleges">
                      Sikh Colleges in Malasiya
                      </Link>
                      </li>
               
                  <li >
                      <Link className="dropdown-item" to="/maingurudwara">
                      Main Gurudwara Sahib in India
                      </Link>
                      </li>
                  </ul>
                  </li>


              <li className="nav-item dropdown ms-2 ">
                <Link
                  className="nav-link dropdown-toggle"
                  to="Home"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Contact
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li >
                      <Link className="dropdown-item" to="/Contact_Us">
                        Contact Us
                      </Link>
                      </li>
               
                  <li >
                      <Link className="dropdown-item" to="/Feedback">
                      Feedback
                      </Link>
                      </li>
                  </ul>
                  </li>     
              <li className="nav-item ms-2  btn btn-outline-dark bg-color-yellow text-white btn-sm w-auto">
                <Link className="nav-link text-white" to="/live_telecast" >
                 LiveTelecast 
                </Link>
              </li>
            </ul>     
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
