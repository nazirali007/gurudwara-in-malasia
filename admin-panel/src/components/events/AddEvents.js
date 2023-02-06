import React from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

import { useState } from "react";

const AddEvents = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const [events, setEvents] = useState({
    eventName: "",
    eventDate: "",
  });

  const { eventName, eventDate } = events;

  const onInputChange = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/events/", events);
      // console.log(res);
     
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setEvents({
        eventName: "",
        eventDate: "",
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
            <h1>Add Events</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Event Name
                </label>
                <input
                  type="text"
                  name="eventName"
                  className="form-control"
                  required
                  id="name"
                  value={eventName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label for="date" className="form-label">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  className="form-control"
                  id="date"
                  value={eventDate}
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

export default AddEvents;
