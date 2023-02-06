import React, { useState } from "react";
import "./AkhandPathRegistration.css";
import url from "./../../../url";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import SnackbarComponent from "../../reusableComponents/SnackbarComponent";
import axios from "axios";
const AkhandPathRegistration = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    purpose: "",
  });
  const onChangedValues = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const apiUrl = `${url}/api/v1/akhandPathReg`;
  const submitValues = async (e) => {
    e.preventDefault();
    try {
      if (formValues.mobile.length === 10) {
        const res = await axios.post(apiUrl, formValues);
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
        // console.log(res);
        setFormValues({
          name: "",
          mobile: "",
          date: "",
          time: "",
          purpose: "",
        });
      } else {
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
      <div className="container mt-5 mb-5">
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">
            Akhand Path Booking
          </h3>
        </div>
        <form onSubmit={(e) => submitValues(e)}>
          
          <div className="jumbotron  main-div px-3">
          <div className="row helpButton d-flex justify-content-end helpButton">
                <p
                  className="text-center bg-color-blue  w-25 p-4 fs-5 helpFirst"
                  style={{ fontSize: "12px ", borderRadius: "15px" }}
                >
                  <span className="text-light">ENQUIRY FOR BOOKING : </span>
                  <span className="text-light">{" (+91)"} 9889967120</span>
                </p>

                <p
                  className=" text-center bg-color-blue p-2 helpSecond "
                  style={{ fontSize: "12px ", borderRadius: "15px" }}
                >
                  <span className="text-light">ENQUIRY FOR BOOKING : </span>
                  <span className="text-light">{" (+91)"} 9889967120</span>
                </p>
              </div>
            <div className="form p-0 py-5 p-md-5">
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Name:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={formValues.name}
                    className="form-control input"
                    required
                    name="name"
                    onChange={(event) => onChangedValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Mobile No:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="mobile"
                    value={formValues.mobile}
                    className="form-control input"
                    required
                    name="mobile"
                    onChange={(event) => onChangedValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Paath Date:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    value={formValues.date}
                    className="form-control input"
                    name="date"
                    required
                    onChange={(event) => onChangedValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Time:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="time"
                    value={formValues.time}
                    className="form-control input"
                    name="time"
                    required
                    onChange={(event) => onChangedValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Purpose:</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="purpose"
                    value={formValues.purpose}
                    cols={15}
                    rows={5}
                    className="input form-control"
                    required
                    onChange={(event) => onChangedValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4 offset-md-3">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-success btn2"
                        onClick={handleShow}
                      >
                        Preview
                      </button>
                    </div>
                    <div className="col-6 text-end d-flex justify-content-center pt-3 ">
                      <button type="submit" className="btn btn-light btn1">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Donation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="jumbotron  main-div">
            <div className="form p-5">
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{formValues.name}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Mobile No:</label>
                </div>
                <div className="col-md-4">
                  <p> +91 {formValues.mobile}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Path Date :</label>
                </div>
                <div className="col-md-4">
                  <p> {formValues.date}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Time :</label>
                </div>
                <div className="col-md-4">
                  <p>{formValues.time}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Purpose</label>
                </div>
                <div className="col-md-4">
                  <p>{formValues.purpose}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor />
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-success btn2"
                        onClick={handleClose}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                      <button type="button" className="btn btn-light btn1">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AkhandPathRegistration;
