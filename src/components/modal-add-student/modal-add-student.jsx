import React, {useEffect, useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import FormInput from "../custom-from-input";
import "./modal-add-student.scss";
import UserService from "../../api/services/user-service";
import GroupService from "../../api/services/group-service";
import {useSelector} from "react-redux";
import Spinner from "../spinner";

const ModalAddStudentDropdownItem = ({ educator, value }) => {
  return <option value={value}>{educator}</option>;
};

const ModalAddStudent = ({show, setShow}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [groupID, setGroupID] = useState(null);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const {institution} = useSelector(state => state.userReducer);

  console.log(groups);

  useEffect(() => {
    setLoading(true);
    const groupService = new GroupService();
    groupService.getGroupsByInstitutionID(institution.id)
      .then(groups => {
        console.log(groups);
        setLoading(false);
        setGroups(groups);
        setGroupID(groups[0].id || groups[0]._id);
      })
      .catch(e => {
        setLoading(false);
        console.log(e)
      });
  }, [])

  const onSubmitHandler = (e) => {
    const userService = new UserService();
    e.preventDefault();
    console.log(firstName, lastName, groupID);
    if (firstName !== '' && lastName !== '' && groupID !== null) {
      userService.createStudent({
        firstName,
        lastName,
        groupID
      })
        .then(res => {
          setShow(false);
          console.log(res);
        })
        .catch(e => console.log(e))
    }
  }

  if (loading) {
    return <Spinner/>;
  }

  return (
    <Modal show={show} onHide={() => {setShow(false)}} size="sm">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-creator">
        <h6>Group</h6>
        <Form onSubmit={e => {
          onSubmitHandler(e);
        }}>
          <Form.Control onChange={e => setGroupID(e.target.value)} as="select">
            {
              groups.map(g => {
                return <ModalAddStudentDropdownItem key={g.id || g._id} educator={`${g.name}`} value={g.id || g._id}/>
              })
            }
          </Form.Control>
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

export default ModalAddStudent;
