import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import FormInput from "../custom-from-input";
import "./modal-creator.scss";

const EducatorItem = ({ educator }) => {
  return <option>{educator}</option>;
};

const ModalCreator = () => {
  return (
    <Modal show={true} onHide={() => {}} size="sm">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-creator">
        <h6>Educator</h6>
        <Form>
          <Form.Control as="select">
            <EducatorItem educator="Якуха" />
            <EducatorItem educator="Якуха2" />
            <EducatorItem educator="Якуха3" />
          </Form.Control>
          <h6>Subject</h6>
          <FormInput />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalCreator;
