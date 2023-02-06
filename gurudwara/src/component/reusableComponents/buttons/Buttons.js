import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  const buttonList = [
    {
      name: "Basic Articles",
      link: "/Basic_Articles",
    },
    {
      name: "Main Articles",
      link: "/Main_Article",
    },
    {
      name: " Sword in Sikhism",
      link: "/Sword_in_Sikhism",
    },
    {
      name: " Duties of the Khalsa",
      link: "/Duties_of_the_Khalsa",
    },
    {
      name: " Gurpurbs",
      link: "/Gurpurbs",
    },
    {
      name: "Glossary",
      link: "/Glossary",
    },
  ];
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <ul className="d-flex justify-content-center flex-column p-2">
          {buttonList.map((item, index) => {
            return (
              <li className="rounded-pill">
                <Link
                  to={item.link}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button
                    key={index}
                    style={{
                      marginTop: "0.8rem",
                      width: "100%",
                      background: `${
                        props.pos === index ? "#030524" : "#F97201"
                      }`,
                      border: "none",
                      onClick: `${goToTop()}`,
                    }}
                    className=""
                  >
                    {item.name}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Buttons;
