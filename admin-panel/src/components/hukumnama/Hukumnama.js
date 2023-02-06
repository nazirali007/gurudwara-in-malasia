import React, { useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

const Hukumnama = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [image, setImage] = useState("");

  const [hukamnama, setHukamnama] = useState({
    hukamnamaText: "",
    hukamnamaDate: "",
  });

  const { hukamnamaText, hukamnamaDate } = hukamnama;

  const onInputChange = (e) => {
    setHukamnama({ ...hukamnama, [e.target.name]: e.target.value });
  };
  const uploadImage = (e) =>{
    
    setImage(e.target.files[0])
    
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/hukamnama", hukamnama);
      // console.log(res);
      
      let formData = new FormData();
      formData.append("image",image);

      const res2 = await axios.post(`/api/v1/hukamnama/create/image/hukamnama/${res.data.data._id}`, formData);
      // console.log(res2)
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setHukamnama({
        hukamnamaText: "",
        hukamnamaDate: "",
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
            <h1>Add Hukamnama</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Add Hukamnama (Optional)
                </label>
                <textarea
                  type="text"
                  rows={8}
                  name="hukamnamaText"
                  className="form-control"
                  id="name"
                  value={hukamnamaText}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div class="mb-3">
                <label for="formFileSm" class="form-label">
                  Add Hukamnama Image
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  accept="image/*"
                  required
                  type="file"
                  onChange={uploadImage}
                />
              </div>

              <div className="mb-3">
                <label for="date" className="form-label">
                  Hukamnama Date
                </label>
                <input
                  type="date"
                  name="hukamnamaDate"
                  required
                  className="form-control"
                  id="date"
                  value={hukamnamaDate}
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

export default Hukumnama;
