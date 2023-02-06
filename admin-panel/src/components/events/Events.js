import React, { useEffect, useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
//api/v1/events/edit-event/:id

import { TrashFill, PencilSquare } from "react-bootstrap-icons";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editEvent, setEditEvent] = useState({
    eventName: "",
    eventDate: "",
  });

  // console.log(editData);

  const getEvents = async () => {
    try {
      const { data } = await axios.get(`/api/v1/events/`);
      // console.log(data.data);
      setEvents(data.data);
      // console.log(setSubscribeData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvents = async (id) => {
    try {
      // console.log(id);
      const res = await axios.delete(`/api/v1/events/delete-event/${id}`);
      if (res.status === 200) {
        getEvents();
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
      }
    } catch (error) {
      console.log(error);
    }           
  };
  const { eventName, eventDate } = editEvent;

  const onChangeModal = (e) => {
    setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
  };

  const onSubmit = async (id) => {
    try {
      const { data } = await axios.post(`/api/v1/events/edit-event/${id}`, editEvent);
      getEvents();
      setOpenSnackbar(true);
      setMessage(data.message);
      setSeverity("success");
    } catch (error) {}

    handleClose();
  };

  const showEditModel = (index) => {
    // console.log(index);
    const singleEvent = events[index];
    // console.log(sing)
    // setEditData(singleEvent);
    handleShow();
  };

  useEffect(() => {
    getEvents();
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
            <h1>All Events</h1>
          </div>
        </div>
      </section>

      <section className="m-3">
        <table className="table table-borderless">
          <thead className=" border-shadow">
            <tr className="table-active">
              <th scope="col">Event Name</th>
              <th scope="col">Date</th>
              <th scope="col">Edit Event</th>
              <th scope="col" className="">
                Delete Event
              </th>
            </tr>
          </thead>

          <tbody>
            {events.map((data, i) => {
              {
                /* console.log(data.eventName) */
              }
              return (
                <tr className=" border-shadow">
                  <td className="">{data.eventName}</td>
                  <td>{data.eventDate}</td>
                  <td>
                    <PencilSquare
                      onClick={() => {
                        setEditData(data);
                        showEditModel(data._id);
                      }}
                    />
                  </td>
                  <td onClick={() => deleteEvents(data._id)}>
                    <TrashFill />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {console.log(editData && editData._id)}
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="editModal">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                name="eventName"
                autoFocus
                defaultValue={editData && editData.eventName}
                onChange={(e) => onChangeModal(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Event Date </Form.Label>
              <Form.Control
                type="date"
                autoFocus
                name="eventDate"
                defaultValue={editData && editData.eventDate}
                onChange={(e) => onChangeModal(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" form="editModal" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => onSubmit(editData._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Events;
