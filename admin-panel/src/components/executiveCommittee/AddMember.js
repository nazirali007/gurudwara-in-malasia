import React from "react";
import { useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

const AddMember = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [member, setMember] = useState({
    name: "",
    post: "",
    mobile: "",
  });
  const { name, post, mobile } = member;

  const onInputChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   
   
    try {
      // console.log("Lenght of nub" + mobile.length);
      if (mobile.length === 10) {
        const res = await axios.post("/api/v1/members", member);
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
        // console.log(res);
        setMember({
          name: "",
          post: "",
          mobile: "",
         
        });
      } else {
        // console.log("false");
        setOpenSnackbar(true);

        setMessage("Input valid number....");  
        setSeverity("error");
      }
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }





   
    // const res = await axios.post("/api/v1/members", member);
    // console.log(res);
    // setMember({
    //   name: "",
    //   post: "",
    //   mobile: "",
    // });



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
            <h1>Add Executive Members</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label for="post" className="form-label">
                  Post
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="post"
                  name="post"
                  required
                  value={post}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label for="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  required
                  name="mobile"
                  value={mobile}
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

export default AddMember;
