import axios from "axios";
import React, { useEffect, useState } from "react";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const HukumnamaAction = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [editData, setEditData] = useState([]);
  const [image, setImage] = useState(null);
  const [hukumnamaData, setHukumnamaData] = useState([]);
  const [editHukamnama, setEditHukamnama] = useState({
    hukamnamaText: "",
    hukamnamaDate: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const getDataHukumnamaActionData = async () => {
    try {
      const apiData = await axios.get("/api/v1/hukamnama/allHukamnama");
      console.log(apiData.data.data);
      setHukumnamaData(apiData.data.data);
      setEditHukamnama({
        hukamnamaText: apiData.data.data.hukumnamaText,
        hukamnamaDate: apiData.data.data.hukumnamaDate,
      })
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeModal = (e) => {
    setEditHukamnama({ ...editHukamnama, [e.target.name]: e.target.value });
  };
  const onSelectFile = (e) => {
    console.log("......files", e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const onSubmit = async (id) => {
    try {
      let formData = new FormData();
      formData.append("image", image);
      const { data } = await axios.post(
        `/api/v1/hukamnama/editHukamnama/${id}`,
        editHukamnama
      );
      if (formData) {
        const res2 = await axios.post(
          `/api/v1/hukamnama/create/image/hukamnama/${id}`,
          formData
        );
      }
      getDataHukumnamaActionData();
      setOpenSnackbar(true);
      setMessage(data.message);
      setSeverity("success");
      handleClose();
    } catch (error) {}
    handleClose();
  };
  const showEditModal = () => {
    handleShow();
  };

  const deleteHukumnama = async (id) => {
    try {
      const res = await axios.delete(
        `/api/v1/hukamnama/deleteHukamnamaById/${id}`
      );
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      getDataHukumnamaActionData();
      // console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
    }
  };

  useEffect(() => {
    getDataHukumnamaActionData();
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
            <h1>All Hukumnama</h1>
          </div>
        </div>
      </section>

      <section className="m-3">
        <table className="table table-borderless">
          <thead className=" border-shadow">
            <tr className="table-active">
              <th scope="col">Hukumnama</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col" className="">
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {hukumnamaData.map((data, i) => {
              return (
                <tr className=" border-shadow">
                  <td className="">{data.hukamnamaText}</td>
                  <td>{data.hukamnamaDate}</td>
                  <td>
                    <PencilSquare
                      onClick={() => {
                        setEditData(data);

                        showEditModal();
                      }}
                    />
                  </td>
                  <td onClick={() => deleteHukumnama(data._id)}>
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
        {console.log("..hukumnama data....", editData.hukamnamaText)}
        <Modal.Header closeButton>
          <Modal.Title>Edit Hukamnama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="editModal">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hukamnama</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="hukamnamaText"
                defaultValue={editData.hukamnamaText}
                onChange={(e) => onChangeModal(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Choose Image if Your Want to Update</Form.Label>
              <Form.Control
                type="file"
                name="image"
                autoFocus
                onChange={(e) => onSelectFile(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hukamnama Date </Form.Label>
              <Form.Control
                type="date"
                autoFocus
                name="hukamnamaDate"
                defaultValue={editData.hukamnamaDate}
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

export default HukumnamaAction;
