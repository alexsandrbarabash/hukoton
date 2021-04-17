import React, {useEffect, useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import FormInput from "../custom-from-input";
import "./modal-add-educator.scss";
import UserService from "../../api/services/user-service";
import GroupService from "../../api/services/group-service";
import {useSelector} from "react-redux";
import Spinner from "../spinner";


const ModalAddEducator = ({show, setShow}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {institution} = useSelector(state => state.userReducer);
  console.log(show + ' MODAL');

  const onSubmitHandler = (e) => {
    const userService = new UserService();
    e.preventDefault();
    if (firstName !== '' && lastName !== '') {
      userService.createEducator({
        firstName,
        lastName,
        institutionID: institution.id
      })
        .then(res => {
          setShow(false);
          console.log(res);
        })
        .catch(e => console.log(e))
    }
  }

  return (
    <Modal show={show} onHide={() => {setShow(false)}} size="sm">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-creator">
        <h6>Educator</h6>
        <Form onSubmit={e => {
          onSubmitHandler(e);
        }}>
          <h6>First name</h6>
          <FormInput
            value={firstName}
            onChange={setFirstName}
          />
          <h6>Last name</h6>
          <FormInput
            value={lastName}
            onChange={setLastName}
          />
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="outline-secondary" onClick={e => setShow(false)}>
              Close
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddEducator;
