import React, { useState } from "react";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import SnackbarComponent from "../../reusableComponents/SnackbarComponent";

import { useNavigate, } from "react-router-dom";


import url from "../../../url";
import { useCallback } from "react";




const Donate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [companyDetailSection, setCompanyDetailSectionVisible] =
    useState("none");
  
  const [showCerModel, setShowCerModel] = useState(false);

  const handleCloseCerModel = () => setShowCerModel(false);
  const handleShowCerModel = () => setShowCerModel(true);

  const [showCerViewModel, setShowCerViewModel] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [panErorr, setPanErorr] = useState(false);
  const [mobErorr, setMobErorr] = useState(false);
  
  // const [form80g, setForm80g ] = useState(false);
  const [certificateRecipientDetail, setCertificateRecipientDetail] = useState({
    recipient_name: "",
    member: "",
    pan: "",
    date: "",
    fiscalYear: "",
    member_name: "",
    profession: "",
    company: "",
    company_pan: "",
    form80GNumber: "",
    effect: "",
    company_address: "",
  });
  const certificateDetailsChanged = (event) => {
    setCertificateRecipientDetail({
      ...certificateRecipientDetail,
      [event.target.name]: event.target.value,
    });
  };
  const handleCloseCerViewModel = () => setShowCerViewModel(false);
  const handleShowCerViewModel = () => setShowCerViewModel(true);
  
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    donationType: "",
    donationAmount: "",
    panNumber: "",
    remark: "",
  });
  let navigate = useNavigate();
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_C8lbgjJcC68Ik0",
      amount: data.amount,
      currency: data.currency,
      name: inputValues.name,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${url}/api/v1/payment/verify`;
          const { data } = await axios.post(verifyUrl, response);
          // console.log(data, response);
          try {
            const res = await axios.post(postApiUrl, inputValues);
            setOpenSnackbar(true);
            setMessage(res.data.message);
            setSeverity("success");

            // console.log("done payment");
          

            navigate("/pdf-download"); 

            navigate(`/pdf-download/${res.data.data._id}`);


           

            // console.log(res);
            setInputValues({
              name: "",
              email: "",
              mobile: "",
              address: "",
              donationType: "",
              donationAmount: "",
              panNumber: "",
              remark: "",
              razorpaySignature: response.razorpay_signature,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
            });
          } catch (error) {
            setOpenSnackbar(true);
            setMessage(error.response.message);
            setSeverity("error");
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(`${url}/api/v1/payment/create`, {
        amount: inputValues.donationAmount,
      });
      // console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeValues = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const postApiUrl = `${url}/api/v1/donation`;
  const submitValues = async (e) => {
    e.preventDefault();
    if (inputValues.mobile.length === 10) {
      if (inputValues.panNumber.length === 10) {
        handlePayment();
      } else {
        // setOpenSnackbar(true);
        setPanErorr(true)
        setPanState();
        // const date = new Date();
        //  const second = date.getSeconds();
        //  console.log(second);
      
     

        // setMessage("Input valid pan card detail....");
        // setSeverity("error");
      }
    } else {
      // setOpenSnackbar(true);
      setMobErorr(true)
      setNumState();
      // setMessage("Input valid number....");
      // setSeverity("error");
    }
  };

  const setPanState =  setTimeout(() => {
    setPanErorr(false)
    }, 10000);
    const setNumState =  setTimeout(() => {
      setMobErorr(false)
      }, 10000);
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
          <h3 className="text-color-orange-dark fw-bold">Donation</h3>
         
        </div>
        <div className="jumbotron  main-div">
          <form onSubmit={(e) => submitValues(e)}>
            <div className="form p-2 p-md-5 ">
              {/* <div className="row helpButton d-flex justify-content-end helpButton">
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
              </div> */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Name</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.name}
                    className="form-control input"
                    name="name"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label for="email">Email ID</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-control input"
                    name="email"
                    value={inputValues.email}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Mobile No</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="mobile"
                    value={inputValues.mobile}
                    onChange={(event) => onChangeValues(event)}
                  />
                      <div className="col " style={{display: `${mobErorr ? "block" : "none"}` }}>
                  <label className="text-warning" >Input valid number....</label>
                </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Address</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="address"
                    cols={15}
                    rows={4}
                    className="input form-control"
                    value={inputValues.address}
                    required
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Donation Type </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="donationType"
                    placeholder="--Select Donation Type--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.donationType}
                    required
                  >
                    <option selected>--Select Donation Type-- </option>
                    <option value={"Donation for Offerings"}>
                      Donation For Prasad
                    </option>
                    <option value={"Donation for Langar"}>
                      Donation For langar
                    </option>
                    <option value={"Donation for Building"}>
                      Donation For Building
                    </option>
                    <option value={"Other"}>Ohter</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Donation Amount</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    required
                    className="form-control input"
                    name="donationAmount"
                    value={inputValues.donationAmount}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>PAN Card Number</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="panNumber"
                    value={inputValues.panNumber}
                    onChange={(event) => onChangeValues(event)}
                  />
                  <div className="col " style={{display: `${panErorr ? "block" : "none"}` }}>
                  <label className="text-warning" >Input valid pan card detail....</label>
                </div>
                </div>
                
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Remarks</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="remark"
                    required
                    cols={15}
                    rows={4}
                    className="input form-control"
                    defaultValue=""
                    value={inputValues.remark}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <p onClick={handleShowCerModel} className="note">
                    Note: To get 80G certificate, you must give your PAN Card
                    number.
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-center pt-3">
                      <Button
                        variant="success"
                        className="btn2"
                        onClick={handleShow}
                      >
                        Preview
                      </Button>
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
          </form>
        </div>
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
                  <p>{inputValues.name}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Email:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.email}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Contact Number:</label>
                </div>
                <div className="col-md-4">
                  <p>+91 {inputValues.mobile}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Donation Type:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.donationType}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Donation Amount:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.donationAmount}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>PAN Card Number</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.panNumber}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Remarks:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.remark}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor />
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-success btn2"
                        onClick={handleClose}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col-6 text-end d-flex justify-content-center pt-3 ">
                      <button
                        type="button"
                        className="btn btn-light btn1"
                        onClick={() => window.print()}
                      >
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

      {/* creficate */}
      <Modal show={showCerModel} onHide={handleCloseCerModel} size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="text-color-orange-dark fw-bolder">
            Certificate Recipient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="jumbotron  Certificat-div">
            <div className="form p-5">
              <form action>
                <div className="row">
                  <div className="col-md-5  mx-3">
                    <div className="col mb-4">
                      <label htmlFor>Certificate Recipient</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="recipient_name"
                        value={certificateRecipientDetail.recipient_name}
                        onChange={(event) => certificateDetailsChanged(event)}
                      />
                    </div>
                    {/* <div className="col mb-4">
                      <label htmlFor>Member</label>
                      <input
                        type="email"
                        className="form-control input"
                        name="member"
                        value={certificateRecipientDetail.member}
                        onChange={(event) => certificateDetailsChanged(event)}
                      />
                    </div> */}
                    <div className="col mb-4">
                      <label htmlFor>Pan Details</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="pan"
                        value={certificateRecipientDetail.pan}
                        onChange={(event) => certificateDetailsChanged(event)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 mx-3">
                    <div className="col mb-4">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor>Date</label>
                          {/* <select
                            className="form-select input"
                            aria-label="Default select example"
                          >
                            <option selected>--Select Date Type-- </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select> */}
                          <input
                            type="date"
                            className="form-control input"
                            name="date"
                            value={certificateRecipientDetail.date}
                            onChange={(event) =>
                              certificateDetailsChanged(event)
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor>Fiscal Year </label>
                          <select
                            className="form-select input"
                            aria-label="Default select example"
                            name="fiscalYear"
                            value={certificateRecipientDetail.fiscalYear}
                            onChange={(event) =>
                              certificateDetailsChanged(event)
                            }
                          >
                            <option selected>--Select Fiscal year-- </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col mb-4">
                      <label htmlFor>Member Name</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="member_name"
                        value={certificateRecipientDetail.member_name}
                        onChange={(event) => certificateDetailsChanged(event)}
                      />
                    </div>
                    <div className="col mb-4">
                      <label htmlFor>Profession</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="profession"
                        value={certificateRecipientDetail.profession}
                        onChange={(event) => certificateDetailsChanged(event)}
                      />
                    </div>
                    <div className="col mb-4">
                      <div className="row">
                        {/* <div className="col-md-6 col-sm-12 d-flex justify-content-center pt-3">
                          <Button
                            variant="success"
                            class="btn2"
                            onClick={handleShowCerViewModel}
                          >
                            Preview
                          </Button>
                        </div> */}
                        <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                          <button
                            type="button"
                            className="btn btn-light btn1"
                            onClick={() =>
                              setCompanyDetailSectionVisible("block")
                            }
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="" style={{ display: companyDetailSection }}>
            <div className="row mt-5  mb-2">
              <h4 className="text-color-orange-dark fw-bolder ">
                Company Details
              </h4>
            </div>
            <div className="jumbotron  Certificat-div">
              <div className="form p-5">
                <form action>
                  <div className="row">
                    <div className="col-md-5  mx-3">
                      <div className="col mb-4">
                        <label htmlFor>Company</label>
                        <input
                          type="text"
                          className="form-control input"
                          name="company"
                          value={certificateRecipientDetail.company}
                          onChange={(event) => certificateDetailsChanged(event)}
                        />
                      </div>
                      <div className="col mb-4">
                        <label htmlFor>Company Pan Number</label>
                        <input
                          type="text"
                          className="form-control input"
                          name="company_pan"
                          value={certificateRecipientDetail.company_pan}
                          onChange={(event) => certificateDetailsChanged(event)}
                        />
                      </div>
                      <div className="col mb-4">
                        <label htmlFor>80G Number</label>
                        <input
                          type="number"
                          className="form-control input"
                          name="form80GNumber"
                          value={certificateRecipientDetail.form80GNumber}
                          onChange={(event) => certificateDetailsChanged(event)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 mx-3">
                      <div className="col mb-4">
                        <label htmlFor>80G with Effect From</label>
                        <input
                          type="text"
                          className="form-control input"
                          name="effect"
                          value={certificateRecipientDetail.effect}
                          onChange={(event) => certificateDetailsChanged(event)}
                        />
                      </div>
                      <div className="col mb-4">
                        <label htmlFor>Company Address</label>
                        <textarea
                          name="company_address"
                          value={certificateRecipientDetail.company_address}
                          onChange={(event) => certificateDetailsChanged(event)}
                          cols={30}
                          rows={3}
                          className="form-control input"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col mb-4">
                        <div className="row">
                          <div className="col-md-6 col-sm-12 d-flex justify-content-center pt-3">
                            <Button
                              variant="success"
                              class="btn2"
                              onClick={handleShowCerViewModel}
                            >
                              Preview
                            </Button>
                            {/* <button type="button" className="btn btn-success btn2">Preview</button> */}
                          </div>
                          <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                            <button
                              type="button"
                              className="btn btn-light btn1"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCerModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* creficate view */}

      <Modal show={showCerViewModel} onHide={handleCloseCerViewModel} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-color-orange-dark fw-bolder ">
            Certificate Recipient Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="jumbotron  main-div">
            <div className="form p-5">
              <div className="row mb-4">
                <div className="col-md-3">Name</div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.recipient_name}</p>
                </div>
              </div>
              .
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Member:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.member}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Member Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.member_name}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>PAN Details:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.company_pan}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Date:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.date}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Fiscal Year:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.fiscalYear}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Company:</label>
                </div>
                <div className="col-md-4">
                  <p>{certificateRecipientDetail.company}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Company Adress:</label>
                </div>
                <div className="col-md-6">
                  <p>{certificateRecipientDetail.company_address}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>80G Number::</label>
                </div>
                <div className="col-md-6">
                  <p>NQ.CIT(E){certificateRecipientDetail.form80GNumber}</p>
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
                      <button
                        type="button"
                        className="btn btn-light btn1"
                        onClick={() => window.print()}
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCerViewModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Donate;
