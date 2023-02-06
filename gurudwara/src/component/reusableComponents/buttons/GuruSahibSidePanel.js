import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GuruSahibSidePanel(props) {
    const buttonList = [
        { name: "Sri Guru Nanak Dev Ji", url: "/sri-guru-nanak-ji" }, 
        { name: "Sri Guru Angad Dev Ji", url: "/Sri-guru-angad-ji" },
        { name: "Sri Guru Amardas Ji", url: "/sri-guru-amardas-ji" },
        { name: "Sri Guru Ramdas Ji", url: "/sri-guru-ramdas-ji" },
        { name: "Sri Guru Arjun Dev Ji", url: "/sri-guru-arjan-dev-ji" },
        { name: "Sri Guru Hargobind Sahib Ji", url: "/sri-guru-hargobind-sahib-ji" },
        { name: "Sri Guru Har Rai Ji", url: "/sri-guru-har-rai-ji" },
        { name: "Sri Guru Har Krishan Ji", url: "/sri-guru-har-krishna-ji" },
        { name: "Sri Guru Tegh Bahadur Ji", url: "/sri-guru-tegh-bahadur-ji" },
        { name: "Sri Guru Gobind Singh Ji", url: "/Sri-guru-gobind-singh-ji" },
        // { name: "Morcha", url: "morcha" },
        // { name: "Sardar", url: "sardar" },
        // { name: "Akal Takht", url: "akal-takht" },
        // { name: "Mahant", url: "mahant" },
        // { name: "Khalsa Diwan", url: "khalsa-diwan" },
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
                  to={item.url}
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
  )
}

export default GuruSahibSidePanel
