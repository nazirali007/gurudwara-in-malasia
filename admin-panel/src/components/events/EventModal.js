import React from 'react'

const EventModal = (props) => {
  return (
    <Modal
    show={props.show}
    onHide={props.handleClose}
    backdrop="static"
    keyboard={false}
    // size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
  {console.log(editData &&  editData.eventName)}
    <Modal.Header closeButton>
      <Modal.Title>Edit Event</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form id="editModal">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1 ">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" autoFocus value={props.data.eventName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Event Date </Form.Label>
          <Form.Control type="date" autoFocus value={props.data.eventDate} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" form="editModal" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default EventModal