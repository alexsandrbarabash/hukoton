import React, {useEffect, useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import FormInput from "../custom-from-input";
import "./modal-add-group.scss";
import UserService from "../../api/services/user-service";
import GroupService from "../../api/services/group-service";
import {useSelector} from "react-redux";


const ModalAddGroup = ({show, setShow}) => {
  const [name, setName] = useState('');
  const {institution} = useSelector(state => state.userReducer);

  const onSubmitHandler = (e) => {
    const groupService = new GroupService();
    e.preventDefault();
    if (name !== '') {
      groupService.createNewGroup({
        institutionID: institution.id,
        name
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
        <h6>Group</h6>
        <Form onSubmit={e => {
          onSubmitHandler(e);
        }}>
          <h6>Group name</h6>
          <FormInput
            value={name}
            onChange={setName}
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

export default ModalAddGroup;
