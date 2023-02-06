import React, { useEffect, useState } from "react";
import "../../../src/App.css";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

import { TrashFill } from "react-bootstrap-icons";

//http://localhost:8082/api/v1/admin/user/20/1

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  // const [totalUser, setTotalUser] = useState(null);
 

  
  const getData = async (page) => {
    try {
      const res = await axios.get(`/api/v1/donation`);
      // console.log(Math.trunc((res.data.totalUser/10))+1);
      // setTotalUser(res.data.data);
      setUserData(res.data.data);
      // console.log("Responce of Donaties", res.data.data);
    } catch (error) {
      console.log(error);
    }
    // userData.map((data) => {
    //   console.log(data.firstName);
    // });
  };

  const deleteDonaties = async (id) => {
    try {
      // console.log(id);
      const res = await axios.delete(`/api/v1/donation/deleteDonaties/${id}`);
      getData();
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      // console.log("deleted");

    } catch (error) {
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
      <section>
        <div className="row p-3 pb-1 pt-0">
          <div className="col">
            <h1> All Donaties</h1>
          </div>
        </div>
      </section>
      <section className="m-3">
        <table className="table table-borderless">
          <thead className=" border-shadow">
            <tr className="table-active">
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col">Donation Amount</th>
              <th scope="col" className="sm-table-data">
                Email
              </th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Address</th>
              <th scope="col">Delete Donatie</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data) => {
              return (
                <tr className=" border-shadow">
                  <td scope="row" className=" d-flex justify-content-start">
                    
                    <p>
                      {/* {data.firstName} {data.lastName} */}
                      {data.name}
                    </p>{" "}
                  </td>
                  <td>{data.donationAmount}/-</td>
                  <td className="sm-table-data">{data.email}</td>
                  <td>{data.mobile}</td>

                  {/* <td>
                    {data.emailApprove ? (
                      <input
                        className="form-check-input"
                        disabled
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      ></input>
                    ) : (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        disabled
                      />
                    )}
                  </td> */}

                  <td>{data.address}</td>
                  <td onClick={() => deleteDonaties(data._id)}>
                    <TrashFill style={{ cursor: "pointer" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section>
        <div className="row mt-5 d-flex justify-content-end ">
          <div className="col  d-flex justify-content-end">
            {/* <Pagination
              count={Math.trunc(totalUser / limit) + 1}
              onChange={paginationChange}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
