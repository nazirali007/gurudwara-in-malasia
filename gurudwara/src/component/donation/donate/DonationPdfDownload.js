import React from "react";
import jsPDF from "jspdf";

import { useRef } from "react";
import { useParams } from "react-router-dom";
import url from "../../../url";

import axios from "axios";
import { useEffect } from "react";

function DonationPdfDownload() {
  const reportTemplateRef = useRef();
  const [visible, setVisible] = React.useState(false);
  const [donator, setDonator] = React.useState([]);
  const { id } = useParams();
  // console.log(id);

  const previewDonation = async () => {
    try {
      const res = await axios.get(`${url}/api/v1/donation/donationDone/${id}`);

      setDonator(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const styleH1 = {
    fontSize: "15px",
    color: "red",
  };
  const styleH2 = {
    fontSize: "30px",
    color: "red",
  };
  const HandleGeneratePdf = () => {
    setVisible(true);
    const doc = new jsPDF({
      unit: "px",
      orientation: "portrait",
      format: "A4",
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        doc.save("document");
      },
    });
    setTimeout(() => {
      setVisible(false);
    }, 0);
  };
  // console.log(donator);
  const invisibleStyle = {
    display: visible ? "block" : "none",
    margin: "50px",
    fontSize: "10px",
    positions: "fixed",
    zIndex: "-10000",
   
    
  };
  const visibleStyle = {
    display: "block",

    fontSize: "20px",
  };

  useEffect(() => {
    previewDonation();
  }, []);

  return (
    <>
      <div id="page" style={invisibleStyle} ref={reportTemplateRef}>
      <div className="col-md-6  d-flex align-items-center justify-content-start">
              <img src="/images/logo.png" className="" style={{height:'50px', width:'50px'}} alt="" />
              <h1 className="ms-2" style={styleH1}>Donation Reciept</h1>
            </div>
       
        {/* <h1 style={styleH1}>Donation Reciept</h1> */}
       <div className=""style={{width:'350px'}} >
       <p>
          <strong>Name : </strong> {donator.name}
        </p>
        <p>
          <strong>Email : </strong> {donator.email}
        </p>
        <p>
          <strong>Mobile Number : </strong> {donator.mobile}
        </p>
        <p>
          <strong>Donation Type : </strong> {donator.donationType}
        </p>
        <p>
          <strong>donation Amount : </strong> {donator.donationAmount}
        </p>
        <p>
          <strong>Pan Number : </strong> {donator.panNumber}
        </p>
        <p>
          <strong>address : </strong> {donator.address}
        </p>

        <p style={{}}>
          <strong> Remark : </strong>    {donator.remark}
       
        </p>
        <p className="text-success " style={{marginLeft:'100px'}}><strong className="border-bottom">Thank You for Your{" "}Support ! </strong></p>
       </div>
      </div>

      <div
        id="page"
        style={visibleStyle}
        className="row  shadow mx-2 mx-sm-3 mx-md-5 my-5"
      >
        <div className="col">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className="col-md-6  d-flex align-items-center justify-content-center">
              <img src="/images/logo.png" className="logo-size" alt="" />
              <h1 style={styleH2}>Donation Reciept</h1>
            </div>

            <div className=" col-md-6  d-flex flex-column align-items-start justify-content-start " >
            <p>
          <strong>Name : </strong> {donator.name}
        </p>
        <p>
          <strong>Email : </strong> {donator.email}
        </p>
        <p>
          <strong>Mobile Number : </strong> {donator.mobile}
        </p>
        <p>
          <strong>Donation Type : </strong> {donator.donationType}
        </p>
        <p>
          <strong>donationAmount : </strong> {donator.donationAmount}
        </p>
        <p>
          <strong>Pan Number : </strong> {donator.panNumber}
        </p>
        <p>
          <strong>address : </strong> {donator.address}
        </p>

        <p>
          <strong>Remark : </strong> {donator.remark}
        </p>
        <p><strong>Thank You for Your Support ! </strong></p>
      </div>

      <div className="container">
        <div className="col  d-flex justify-content-center mb-5 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => HandleGeneratePdf()}
          >
            Export To Pdf
          </button>
        </div>
            </div>

            
          </div>
        </div>
       
      </div>
    </>
  );
}

export default DonationPdfDownload;
