import React, { useState, useEffect } from "react";
import Intern from "./Intern";
import axios from "axios";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const Outreachy = () => {
  const [index, setIndex] = useState(0);
  const [qutreachyData, setOutreachyData] = useState({});
  const getData = async () => {
    try {
      const res = await axios("/api/v1/main/outreachy");
      setOutreachyData(res.data.outreachy);
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const updateTitleHandler = (event) => {
    setOutreachyData({ ...qutreachyData, dateTitle: event.target.value });
  };
  const updateTitleData = async () => {
    try {
      const res = await axios.post("/api/v1/main/outreachy/update/title", {
        outreachyTitle: qutreachyData.dateTitle,
      });
      console.log(res);
      getData();
    } catch (error) {}
  };
  return (
    <>
      {qutreachyData.dateTitle ? (
        <div>
          <div className="row p-3 mt-2">
            <div className="col text-center d-flex justify-content-center align-items-center">
              {/* <h1>{qutreachyData.dateTitle}</h1> */}
              <FormControl
                sx={{ width: "60%" }}
                size="normal"
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-amount">
                  Update Title
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={qutreachyData.dateTitle}
                  onChange={updateTitleHandler}
                />
              </FormControl>
              <Button variant="contained" onClick={updateTitleData}>
                Update
              </Button>
            </div>
          </div>

          <section>
            <div
              className="row p-4 border-top border-bottom"
              style={{
                backgroundColor: "#FFE34F",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                zIndex: "3",
              }}
            >
              <div className="col text-center">
                <h2>Find out what our interns are into this cohort</h2>
              </div>
            </div>
            <div className="p-0" style={{ backgroundColor: "#FFE34F" }}>
              <div
                className="p-0 d-md-flex justify-content-evenly gap-2"
                style={{ color: "white" }}
              >
                <div
                  onClick={(e) => setIndex(0)}
                  className="w-100 p-3 d-flex justify-content-center rounded cursor-pointer mb-2 mb-md-0"
                  style={
                    index === 0
                      ? {
                          backgroundColor: "#FFFA7B",
                          color: "black",
                          width: "32%",
                        }
                      : { width: "32%" }
                  }
                >
                  <div className="text-center w-100">Intern:1</div>
                </div>
                <div
                  onClick={(e) => setIndex(1)}
                  className=" w-100 p-3 d-flex justify-content-center rounded cursor-pointer mb-2 mb-md-0"
                  style={
                    index === 1
                      ? {
                          backgroundColor: "#FFFA7B",
                          color: "black",
                          width: "32%",
                        }
                      : { width: "32%" }
                  }
                >
                  <div className="text-center">Intern:2</div>
                </div>
                <div
                  onClick={(e) => setIndex(2)}
                  className=" w-100 p-3 d-flex justify-content-center rounded cursor-pointer mb-2 mb-md-0"
                  style={
                    index === 2
                      ? {
                          backgroundColor: "#FFFA7B",
                          color: "black",
                          width: "32%",
                        }
                      : { width: "32%" }
                  }
                >
                  <div className="text-center">Intern:3</div>
                </div>
              </div>
            </div>

            <Intern
              index={index}
              setOutreachyData={setOutreachyData}
              qutreachyData={qutreachyData}
              getData={getData}
            />
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Outreachy;
