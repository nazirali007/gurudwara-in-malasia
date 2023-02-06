import React from 'react'

const DonateForm = () => {
  return (
    <>
         <div className="row d-flex color-primary-border justify-content-center mx-2 mb-5 mx-md-5 color-green-bg ">
            <div className="row d-flex justify-content-center ">
              <div className="col-md-8  text-start ">
                <div className="row mt-3 d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="name" className="form-label color-text-blue">
                      Name
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <input
                      type="text"
                      className="form-control form-items"
                      id="name"
                      name="name"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="email" className="form-label color-text-blue">
                      Email ID
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <input
                      type="text"
                      className="form-control form-items"
                      id="email"
                      name="email"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="mobile" className="form-label color-text-blue">
                      Mobile No
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <input
                      type="text"
                      className="form-control form-items"
                      id="mobile"
                      name="mobile"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="address" class="form-label">
                      Address
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <textarea
                      class="form-control form-items"
                      id="address"
                      name="address"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label
                      for="donationType"
                      className="form-label color-text-blue"
                    >
                      Donation Type
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <select
                      class="form-select"
                      name="donationType"
                      aria-label="Default select example"
                    >
                      <option selected>Select type</option>
                      <option value="1">Main</option>
                      <option value="2">Other</option>
                      
                    </select>
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="DonationAmount" className="form-label color-text-blue">
                    Donation Amount
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <input
                      type="text"
                      className="form-control form-items"
                      id="DonationAmount"
                      name="DonationAmount"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="pan" className="form-label color-text-blue">
                    PAN Card Number
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <input
                      type="text"
                      className="form-control form-items"
                      id="pan"
                      name="pan"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="row d-flex justify-content-evenly  ">
                  <div className="col-md-3   pt-3">
                    <label for="remark" class="form-label">
                    Remarks
                    </label>
                  </div>

                  <div className="col-md-8  pt-3">
                    <textarea
                      class="form-control form-items"
                      id="remark"
                      name="remark"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="row d-flex justify-content-evenly  ">
                  <div className="col  text-color-orange pt-4">
                  Note: Lorem Ipsum is a dummy text to fill anywhere 
                  </div>

                  
                </div>

                <div className="row d-flex justify-content-evenly mb-5 ">
                  <div className="col-md-3   pt-3">
                   
                  </div>

                  <div className="col-md-8  pt-3">
                  <div className="col  d-flex justify-content-evenly">
                    <button type="button" className="btn btn-light fw-bolder bg-color-dark-green text-white">
                      Preview
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary fw-bolder"
                      style={{ backgroundColor: "#F97201" }}
                    >
                      Next
                    </button>
                  </div>
                  </div>
                </div>

              </div>
            </div>

            
          </div>
    </>
  )
}

export default DonateForm