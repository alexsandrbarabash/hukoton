import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./modal-educator.scss";

const ItemStudent = () => {
  return (
    <div className="item-student">
      <span>name</span> <input type="text" />
    </div>
  );
};

const ModalEducator = () => {
  return (
    <Modal show={true} onHide={() => {}} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-educator">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h5>Group</h5>
              <div className="left-col">
                <div className="student-grade">
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                  <ItemStudent />
                </div>
              </div>
            </div>
            <div className="col-5 textarea-wrapper">
              <h5>Homework</h5>
              <textarea></textarea>
            </div>
          </div>
          <div className="row modal-educator-footer">
            <div className="col-7 mt-3 mb-3">
              <div className="row">
                <button className="col-5 btn btn-primary ">Save</button>
                <button className="col-5 btn-outline-primary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEducator;
