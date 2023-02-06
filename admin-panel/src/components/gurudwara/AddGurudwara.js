import React from "react";
import { useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

const AddGurudwara = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [gurudwara, setGurdwara] = useState({
    gurudwaraName: "",
    gurudwaraUrl: "",
  });
  const { gurudwaraName, gurudwaraUrl } = gurudwara;
  const onInputChange = (e) => {
    setGurdwara({ ...gurudwara, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/allGurudwara", gurudwara);
      // console.log(res);
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setGurdwara({
        gurudwaraName: "",
        gurudwaraUrl: "",
      });
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);
      setMessage(error.response.message);
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
      <section>
        <div className="row p-3 pb-1 pt-2">
          <div className="col">
            <h1>Add Gurudwara</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Gurudwara Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="gurudwaraName"
                  value={gurudwaraName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label for="url" className="form-label">
                  Gurudwara URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  required
                  name="gurudwaraUrl"
                  value={gurudwaraUrl}
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

export default AddGurudwara;
