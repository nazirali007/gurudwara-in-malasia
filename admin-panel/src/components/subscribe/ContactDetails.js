import React, { useState, useEffect } from "react";

import axios from "axios";
import { TrashFill } from "react-bootstrap-icons";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

//const http://localhost:8084/api/v1/gurudwara/contact
const ContactDetails = () => {
  const [contact, setContact] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const getData = async () => {
    try {
      const { data } = await axios.get(`/api/v1/gurudwara/contact`);
      
      setContact(data.data);
      // console.log(setSubscribeData);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteContactDetail = async (id) => {
    try {
      const res = await axios.delete(
        `/api/v1/gurudwara/deleteContactDetail/${id}`
      );
      console.log(res.data.message);
      getData();
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SnackbarComponent
        open={openSnackbar}
        severity={severity}
        setOpen={setOpenSnackbar}
        message={message}
      />
      <div
        className="row "
        style={{ width: "80vw", margin: "auto", overflowX: "auto" }}
      >
        <div className="col ">
          <section>
            <div className="row p-3 mt-5 pb-1 pt-0">
              <div className="col">
                <h1>Contact Details </h1>
              </div>
            </div>
          </section>

          <section className="m-3">
            <table className="table table-borderless">
              <thead className=" border-shadow">
                <tr className="table-active">
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col" className="">
                    Message
                  </th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>

              <tbody>
                {contact.map((data, i) => {
                  return (
                    <tr className=" border-shadow">
                      <td className="">{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.mobile}</td>
                      <td>{data.message}</td>
                      <td onClick={() => deleteContactDetail(data._id)}>
                        <TrashFill />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
