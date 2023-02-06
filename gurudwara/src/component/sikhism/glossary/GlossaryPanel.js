import React from "react";
import { Button } from "react-bootstrap";

function GlossaryPanel(props) {
  const buttonList = [
    { name: "Akali", url: "akali" },
    { name: "Guru Granth Sahib", url: "guru-granth-sahib" },
    { name: "Mihang", url: "mihang" },
    { name: "Granthi", url: "granthi" },
    { name: "Panth", url: "panth" },
    { name: "Sadh Sangat", url: "sadh-sangat" },
    { name: "Sant", url: "sant" },
    { name: "Giani", url: "giani" },
    { name: "Jathedar", url: "jathedar" },
    { name: "Singh Sabha", url: "singh-sabha" },
    { name: "Morcha", url: "morcha" },
    { name: "Sardar", url: "sardar" },
    { name: "Akal Takht", url: "akal-takht" },
    { name: "Mahant", url: "mahant" },
    { name: "Khalsa Diwan", url: "khalsa-diwan" },
  ];
  return (
    <>
      <div className="container">
        <ul className="d-flex justify-content-center flex-column p-2">
          <li className="bg-color-blue text-white p-2 text-center rounded-top border-5 border-bottom border-warning">
            <h5>Glossary</h5>
          </li>
          {buttonList.map((item, index) => {
            return (
              <li className="rounded-pill">
                <Button
                  key={index}
                  style={{
                    marginTop: "0.2rem",
                    width: "100%",
                    background: "#E7740A",
                    border: "none",
                  }}
                  onClick={() => {
                    window.EventTarget(item.url)
                  }}
                >
                  {item.name}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default GlossaryPanel;
