import axios from "axios";
import React, { useState } from "react";
import Children from "./Children";
import SnackbarComponent from "../../reusableComponents/SnackbarComponent";
import "./GeneralInformation.css";
import url from "../../../url";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const GeneralInformation = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [familyForm, setFamilyForm] = useState(false);
  const [child, setChild] = useState([]);
  const [noOfChild, setNoOfChild] = useState(0);
  const [parentInfo, setParentInfo] = useState({
    name: "",
    email: "",
    education: "",
    address: "",
    age: "",
    maritalStatus: "",
    mobile: "",
    profession: "",
  });

  const {
    name,
    email,
    education,
    address,
    age,
    maritalStatus,
    mobile,
    profession,
  } = parentInfo;
  const onInputChange = (e) => {
    setParentInfo({
      ...parentInfo,
      [e.target.name]: e.target.value,
    });
    if (e.target.name == "noOfChild") {
      setNoOfChild(e.target.value);
    }
  };

  const marriedHandler = (event) => {
    if (event.target.value === "Married") {
      setFamilyForm(true);
    } else {
      setFamilyForm(false);
    }
  };
  const childrenHandler = (event) => {
    // event.target.value
    const array = [];
    for (let index = 0; index < event.target.value; index++) {
      array.push({
        childNo: index + 1,
        name: "",
        education: "",
        address: "",
        childAge: "",
        maritalStatus: "",
        mobile: "",
        childProfession: "",
      });
    }
    setChild(array);
  };
  // console.log(child);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/v1/generalInfo`, {
        parentInfo,
        child,
      });
      // console.log("process child.....", child);
      setParentInfo({
        name: "",
        email: "",
        education: "",
        address: "",
        age: "",
        maritalStatus: "",
        mobile: "",
        profession: "",
      });
      setNoOfChild(0);

      setChild([]);

      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);

      setMessage(error.message);
      setSeverity("error");
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
        <form onSubmit={(e) => onSubmit(e)} className="needs-validation">
          <div className="row mb-3">
            <h3 className="text-color-orange-dark fw-bold">
              General Information
            </h3>
          </div>
          <div className="jumbotron  ger-div">
            <div className="form p-3 pe-5 p-md-5">
              <form action>
                <div className="row">
                  <div className="col-md-5  mx-3">
                    <div className="col mb-4">
                      <label>Name</label>  
                      <input
                        type="text"
                        className="form-control input"
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col mb-4">
                      <label htmlFor>Email ID</label>
                      <input
                        type="email"
                        required
                        className="form-control input"
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col mb-4">
                      <label htmlFor>Education</label>
                      <input
                        type="text"
                        required
                        className="form-control input"
                        name="education"
                        value={education}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col mb-4">
                      <label>Address</label>
                      <textarea
                        name="address"
                        required
                        cols={30}
                        rows={4}
                        className="form-control input"
                        value={address}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 mx-3">
                    <div className="col mb-4">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor>Age</label>
                          <input
                            type="text"
                            className="form-control input"
                            aria-label="Default select example"
                            onChange={(e) => onInputChange(e)}
                            name="age"
                            value={age}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor>Marital Status</label>
                          <select
                            className="form-select input"
                            aria-label="Default select example"
                            name="maritalStatus"
                            required
                            value={maritalStatus}
                            onChange={(e) => {
                              marriedHandler(e);
                              onInputChange(e);
                            }}
                          >
                            <option selected>--Select Marital Status-- </option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {familyForm ? (
                      <div className="col mb-4">
                        <label htmlFor>Children </label>
                        <select
                          onChange={(e) => {
                            childrenHandler(e);
                            onInputChange(e);
                          }}
                          className="form-select input"
                          aria-label="Default select example"
                          name="noOfChild"
                          required
                          value={noOfChild}
                        >
                          <option selected>--Children--</option>
                          <option value={0}>0</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="col mb-4">
                      <label htmlFor>Mobile Number</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="mobile"
                        required
                        value={mobile}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="col mb-4">
                      <label htmlFor>Profession</label>
                      <input
                        type="text"
                        className="form-control input"
                        name="profession"
                        required
                        value={profession}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {child.map((item, index) => {
            return (
              <div key={item.childNo} className="jumbotron  ger-div mt-5">
                <Children index={index} child={child} setChild={setChild} />
              </div>
            );
          })}

          <div className="col mb-4">
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
        </form>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>General Information Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="jumbotron  main-div mb-4">
            <div className="form p-5">
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{name}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Age :</label>
                </div>
                <div className="col-md-4">
                  <p>{age}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Merital Status:</label>
                </div>
                <div className="col-md-4">
                  <p>{maritalStatus}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Eamil Id:</label>
                </div>
                <div className="col-md-4">
                  <p>{email}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Mobile No:</label>
                </div>
                <div className="col-md-4">
                  <p> +91 {mobile}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Education :</label>
                </div>
                <div className="col-md-4">
                  <p>{education} </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Profession :</label>
                </div>
                <div className="col-md-4">
                  <p>{profession}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Address : </label>
                </div>
                <div className="col-md-4">
                  <p>{address}</p>
                </div>
              </div>

              {/* <div className="row mb-4">
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
              </div> */}
            </div>
          </div>{" "}
          <Modal.Title>Children Information</Modal.Title>
          <div className="jumbotron main-div mt-3">
            {
              child.map((childData,index)=>{
                return <div className="p-5">
                <h4>{!childData?"not Found":`Detail of children  ${childData.childNo} :` }</h4>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Name : </label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.name}
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Age : </label>
                  </div>
                  <div className="col-md-4">
                    <p>{!childData?"":childData.childAge}</p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Merital Status : </label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.maritalStatus}
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Education : </label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.education}
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Mobile No :</label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.mobile}
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Address:</label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.address}
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label htmlFor>Children Profession:</label>
                  </div>
                  <div className="col-md-4">
                    <p>
                    {!childData?"":childData.childProfession}
                    </p>
                  </div>
                </div>
              </div>
              })
            }
          </div>


          {/* section for buttons */}
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
                  <button type="submit" style={{backgroundColor:'#f97201'}} className="btn btn-light "
                  onClick={handleClose}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
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

export default GeneralInformation;
