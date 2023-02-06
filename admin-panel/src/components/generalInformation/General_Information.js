import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

const General_Information = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [generalInfoData, setGeneralInfoData] = useState([]);
  const getGeneralInfoData = async () => {
    try {
      const apiData = await axios.get("api/v1/generalInfo");
      // console.log("general info data ", apiData.data);
      setGeneralInfoData(apiData.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteGeneralInfoData = async (id) => {
    try {
      const res = await axios.delete(`api/v1/generalInfo/deleteGeneralInfo/${id}`);
      // console.log("general info data ", res.data);
      getGeneralInfoData();
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");

    } catch (error) {
      console.log(error.message);
       setOpenSnackbar(true);
        setMessage(error.message);
        setSeverity("error");
    }
  };
  useEffect(() => {
    getGeneralInfoData();
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
        <div className="row p-3 pb-1 pt-2">
          <div className="col text-center">
            <h1>General Information Detail</h1>
          </div>
        </div>
      </section>

      <section className="m-3">
        <table className="table table-borderless">
          <thead className=" border-shadow">
            <tr className="table-active">
              <th scope="col">Name</th>
              <th scope="col">Education</th>
              <th scope="col">Address</th>
              <th scope="col">Marital Status</th>
              <th scope="col">Mobile</th>
              <th scope="col">No. Children</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {generalInfoData.map((data, i) => {
              return (
                <tr className=" border-shadow">
                  <td className="">{data.name}</td>
                  <td>{data.education}</td>
                  <td>{data.address}</td>
                  <td>{data.maritalStatus}</td>
                  <td>{data.mobile}</td>
                  <td>{data.children.length}</td>
                  <td onClick={() => deleteGeneralInfoData(data._id)}>
                    <TrashFill />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default General_Information;
