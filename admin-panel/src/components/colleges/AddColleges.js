import React from "react";
import { useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

const AddColleges = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const [college, setCollege] = useState({
    collegeName: "",
    collegeUrl: "",
  });

  const { collegeName, collegeUrl } = college;

  const onInputChange = (e) => {
    setCollege({ ...college, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/college", college);
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      // console.log(res);
      setCollege({
        collegeName: "",
        collegeUrl: "",
      });
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
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
      <section>
        <div className="row p-3 pb-1 pt-2">
          <div className="col">
            <h1>Add College</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  College Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="collegeName"
                  value={collegeName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="url" className="form-label">
                  College URL   
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  required
                  name="collegeUrl"
                  value={collegeUrl}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddColleges;
