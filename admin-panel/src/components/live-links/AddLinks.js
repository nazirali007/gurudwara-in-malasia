import React from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

import { useState } from "react";

const AddLinks = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const [liveLinks, setLiveLinks] = useState({
    linkName: "",
    linkUrl: "",
  });

  // const { linkName, linkUrl } = liveLinks;

  const onInputChange = (e) => {
    setLiveLinks({ ...liveLinks, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/links", liveLinks);
      // console.log(res);
     
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setLiveLinks({
        linkName: "",
        linkUrl: "",
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
          <div className="col text-center text-success">
            <h6>Change Live Links</h6>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              

              <div className="mb-3">
              <label forName="name" className="form-label">
                  Update <span className="text-danger f-small"> *(change link of lucknow Gurudwara Sahib :)</span>
                </label>
                <input
                  type="text"
                  name="linkUrl"
                  required
                  className="form-control border-danger bg-dark text-white outlined-danger"
                  id="date"
                  value={liveLinks.linkUrl}
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
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
              Provide Name <span className="text-danger f-small"> *(ensure the name of Gurudwara Sahib :)</span>
                <input
                  type="text"
                  name="linkName"
                  className="form-control"
                  required
                  id="name"
                  value={liveLinks.linkName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label for="date" className="form-label">
                  Paste Link URL Here !
                </label>
                <input
                  type="text"
                  name="linkUrl"
                  required
                  className="form-control"
                  id="date"
                  value={liveLinks.linkUrl}
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

export default AddLinks;
