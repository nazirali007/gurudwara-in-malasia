import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import download from "downloadjs";
import { TrashFill } from "react-bootstrap-icons";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";
const Feedback = () => {
  // let navigate = useNavigate();
  ///feedback
  const [feedbackData, setFeedbackData] = useState([]);
  // const [totalFeedback, setTotalFeedback] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const limit = 10;
  // 
  const getData = async () => {
    try {
      const res = await axios.get(`/api/v1/feedback`);
      // console.log("Api admin", res.data.data);
      setFeedbackData(res.data.data);
      // setTotalFeedback(res.data.totalFeedBack);
    } catch (error) {
      console.log(error);
    }
  };

  // const downloadExcel = async (page) => {
  //   axios
  //     .get("/api/v1/admin/feedback", {
  //       method: "GET",
  //       responseType: "blob", // important
  //     })
  //     .then((response) => {
  //       const url = window.URL.createObjectURL(new Blob([response.data]));
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", `feedback.xlsx`);
  //       document.body.appendChild(link);
  //       link.click();
  //     });
  // };

  const deleteFeedbackData = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/feedback/deleteFeedback/${id}`);
      // console.log(res);
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      getData();
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(window.location.origin);
  return (
    <>
    <SnackbarComponent
        open={openSnackbar}
        severity={severity}
        setOpen={setOpenSnackbar}
        message={message}
      />
      <div className="row" style={{ width: "70vw" }}>
        <div className="col ">
          <section>
            <div className="row p-3 mt-5 pb-1 pt-0">
              <div className="col">
                <h1>Feedback </h1>
              </div>
            </div>
          </section>

          <section className="m-3">
            <table className="table table-borderless">
              <thead className=" border-shadow">
                <tr className="table-active">
                  <th scope="col" className="sm-table-data">
                    Name
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Massage</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>

              <tbody>
                {feedbackData.map((data) => {
                  return (
                    <tr className=" border-shadow">
                      <td className="sm-table-data">{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.feedback}</td>
                      <td onClick={() => deleteFeedbackData(data._id)}>
                        <TrashFill />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <section>
            <div className="row mt-5 d-flex justify-content-between align-items-center">
              <div className="col mx-5 d-flex justify-content-start">
                {/* <Button onClick={downloadExcel} variant="contained">
                  Download Excel
                </Button> */}
              </div>
              <div className="col  d-flex justify-content-end">
                {/* <Pagination
                  count={Math.trunc(totalFeedback / limit) + 1}
                  onChange={paginationChange}
                /> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Feedback;
