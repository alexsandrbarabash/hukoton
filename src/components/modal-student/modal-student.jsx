import React, {useState} from "react";
import { Modal } from "react-bootstrap";

const ModalStudent = ({ handleClose }) => {
  const [show, setShow] = useState(true);
  return (
    <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>History</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Educator: Jon Sheperd</div>
        <div>
          Task: Find interesting fact about French Revolution. Also read this
          book:
          https://brill.com/flyer/db/bho?print=pdf&pdfGenerator=headless_chrome
        </div>
        <div>Time: 8:00-8:45</div>
        <div>Grades: You don't have assessments</div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalStudent;
