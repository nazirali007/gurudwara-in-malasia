import React, { useEffect, useState } from "react";
import "./Feedback.css";
import SnackbarComponent from "../reusableComponents/SnackbarComponent";
import axios from "axios";
import url from "../../url";

const FeedBack = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    mobile: "",
    email: "",
    feedback: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const onChangedValues = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const apiUrl = `${url}/api/v1/feedback`;
  const submitValues = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl, inputValues);
      setInputValues({
        name: " ",
        mobile: " ",
        email: " ",
        feedback: " ",
      });
      // console.log(inputValues);
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      // console.log(res);
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <SnackbarComponent
        open={openSnackbar}
        severity={severity}
        setOpen={setOpenSnackbar}
        message={message}
      />
      <div className="container mt-5 mb-5">
        <div className="row">
          <h3 className="first-heading">Feedback Form</h3>
        </div>
        <div className="jumbotron  Feedback-div">
          <div className="form p-md-5 pe-4 py-4">
            <form onSubmit={(e) => submitValues(e)}>
              <div className="row">
                <div className="col-md-5  mx-3">
                  <div className="col mb-4">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control input"
                      name="name"
                      value={inputValues.name}
                      required
                      onChange={(event) => onChangedValues(event)}
                    />
                  </div>
                  <div className="col mb-4">
                    <label>Phone Number</label>
                    <input
                      type="mobile"
                      value={inputValues.mobile}
                      className="form-control input"
                      name="mobile"
                      required
                      onChange={(event) => onChangedValues(event)}
                    />
                  </div>
                  <div className="col mb-4">
                    <label htmlFor>Email</label>
                    <input
                      type="email"
                      value={inputValues.email}
                      className="form-control input"
                      name="email"
                      required
                      onChange={(event) => onChangedValues(event)}
                    />
                  </div>
                </div>
                <div className="col-md-5 mx-3">
                  <div className="col mb-4">
                    <label htmlFor>Feedback / Suggestion</label>
                    <textarea
                      name="feedback"
                      value={inputValues.feedback}
                      cols={30}
                      rows={7}
                      className="form-control input"
                      required
                      onChange={(event) => onChangedValues(event)}
                    />
                  </div>
                  <div className="col mb-4">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                        <button type="submit" className="btn btn-success ">
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
    </>
  );
};
export default FeedBack;
