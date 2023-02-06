import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignIn = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h3 className="text-color-green text-center m-3">
        If you want to be contributors ?
      </h3>
      <div className="row d-flex color-primary-border justify-content-center mx-2 mb-5 mx-md-5 color-green-bg ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-10  text-start pt-3 ">
            <div className="row d-flex justify-content-evenly  ">
              <div className="col-md-5  pt-3">
                <label for="exampleFormControlInput1" className="form-label color-text-blue ">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="name"
                  placeholder=""
                />
              </div>
              <div className="col-md-3  pt-3">
                <label for="exampleFormControlInput2" className="form-label color-text-blue">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="Age"
                  placeholder=""
                />
              </div>

              <div className="col-md-3  pt-3">
                <label for="exampleFormControlInput3" className="form-label color-text-blue">
                  Marital Status
                </label>
                <select className="form-select" aria-label="Default select example form-items">
                  <option selected>Marital Status</option>
                  <option value="1">Married</option>
                  <option value="2">Unmarried</option>
                  <option value="3">Divorced</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-md-10  text-start">
            <div className="row d-flex justify-content-evenly  ">
              <div className="col-md-5  pt-3">
                <label for="exampleFormControlInput1" className="form-label color-text-blue">
                  Contact Number
                </label>
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="RU"
                  value={value}
                  onChange={setValue}
                />
              </div>

              <div className="col-md-3  pt-3 offset-md-3">
                <label for="exampleFormControlInput2" className="form-label color-text-blue">
                  Children Age
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="Age"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center ">
          <div className="col-md-10  text-start ">
            <div className="row d-flex justify-content-evenly  ">
              <div className="col-md-12  pt-3">
                <label for="exampleFormControlInput2" className="form-label color-text-blue">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="Age"
                  placeholder=""
                />
              </div>
              <div className="col-md-12 pt-3  ">
                <label for="exampleFormControlInput2" className="form-label color-text-blue">
                  Qualification
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="Age"
                  placeholder=""
                />
              </div>
              <div className="col-md-12 pt-3  mb-5">
                <label for="exampleFormControlInput2" className="form-label color-text-blue">
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control form-items"
                  id="Age"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center pb-5">
          <div className="col-md-10  text-start pt-3 ">
            <div className="row d-flex justify-content-evenly  ">
              <div className="col  d-flex justify-content-evenly">
              <button type="button" className="btn btn-light fw-bolder">Preview</button>
              <button type="button" className="btn btn-primary fw-bolder" style={{backgroundColor:'#25CD89',}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
