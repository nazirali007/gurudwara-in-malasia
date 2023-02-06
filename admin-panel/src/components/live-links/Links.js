import React, { useEffect, useState } from "react";
import axios from "axios";
import SnackbarComponent from "../../reusableComponent/snackBar/SnackbarComponent";

import { TrashFill, PencilSquare, Rss } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AllLinks = () => {
  const [allLinks, setAllLinks] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [addState, setAddState] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [liveLinks, setLiveLinks] = useState({
    linkName: "",
    linkUrl: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [editLiveLinks, setEditLiveLinks] = useState({});
  const onChangeModal = (e) => {
    setEditLiveLinks({ ...editLiveLinks, [e.target.name]: e.target.value });
  };
  const onInputChange = (e) => {
    setLiveLinks({ ...liveLinks, [e.target.name]: e.target.value });
  };
  const showEditModel = (id) => {
    setActiveId(id);
    getLinkData(id);
    handleShow();
  };
  const getLinkData = async (id) => {
    try {
      const res = await axios.get(`api/v1/links/live-link/${id}`);
      console.log("response..", res.data.data);
      if (res.status === 200) {
        console.log("response. two.", res.data.data);
        const { linkName, linkUrl } = res.data.data;
        setEditLiveLinks({ linkName, linkUrl });
      }
    } catch (error) {
      console.log(error);
    }
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
      getLinks();
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }
  };

  const onModelSubmit = async (id) => {
    try {
      const res = await axios.put(
        `api/v1/links/edit-link/${id}`,
        editLiveLinks
      );
      console.log("updated response", res);
      if (res.status === 200) {
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
        setEditLiveLinks({});
        setActiveId(null);
        getLinks();
        handleClose();
      }
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.message);
      setSeverity("error");
      console.log(error);
    }
  };
  const getLinks = async () => {
    try {
      const { data } = await axios.get(`/api/v1/links/`);
      console.log(data.data);
      if (data.data.length < 2) {
        alert(
          `${
            data.data.length == 0
              ? "Add Link of Lucknow Gurudwara Sahib"
              : "Add Link of Amritsar Gurudwara Sahib"
          }`
        );
        setAddState(true);
      } else {
        setAllLinks(data.data);
        console.log("data..", data.data);
        setAddState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLinks = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/links/delete-link/${id}`);
      if (res.status === 200) {
        getLinks();
        setOpenSnackbar(true);
        setMessage(res.data.message);
        setSeverity("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLinks();
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
          <div className="col text-center text-success">
            <h3>Video Link Detail</h3>
          </div>
        </div>
      </section>

      <section className="m-3" style={{ overflowX: "scroll", width: "100" }}>
        {allLinks?.map((data, index) => (
          <div class="card mt-2">
            <div class="card-body">
              <h5 class="card-title">{data.linkName}</h5>
              <p class="card-text">
                <a href={data.linkUrl} target="_blank">
                  {data.linkUrl}
                </a>
              </p>

              {/* <PencilSquare
                className="text-danger"
                onClick={() => {
                  showEditModel(data._id);
                }}
              /> */}
              <button
                className="btn btn-primary"
                onClick={() => {
                  showEditModel(data._id);
                }}
              >
                Change Link
              </button>
            </div>
          </div>
        ))}
        {/* </tbody>
        </table> */}
      </section>
      {addState ? (
        <div className="row d-flex justify-content-center p-3">
          <div className="col-md-7">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                Provide Name{" "}
                <span className="text-danger f-small">
                  {" "}
                  *(ensure the name of Gurudwara Sahib :)
                </span>
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
      ) : (
        <></>
      )}
      <section>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="new-modal-css"
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="editModal">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6>
                    Paste Link for{" "}
                    <span className="text-warning">
                      {editLiveLinks?.linkName} Gurdwara Shahib
                    </span>
                    <span className="text-danger fs-small">
                      *(Provide latest link)
                    </span>
                  </h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="linkUrl"
                  defaultValue={editLiveLinks?.linkUrl}
                  onChange={(e) => onChangeModal(e)}
                  onInput={(e) => onChangeModal(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" form="editModal" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => onModelSubmit(activeId)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default AllLinks;
