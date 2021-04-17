import React from 'react';
import './selection-nav-bar.scss'
import {ListGroup} from "react-bootstrap";
import AddEducatorButton from "../add-educator-button";
import AddGroupButton from "../add-group-button";
import AddStudentButton from "../add-student-button";


const SelectionMenuSidebar = ({toggleHandler}) => {

  return (
    <ListGroup>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(1)}>
        <div className="d-flex justify-content-between align-middle">
          <span>Educators</span>
          <AddEducatorButton mode={1}/>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(2)}>
        <div className="d-flex justify-content-between">
          <span>Students</span>
          <AddStudentButton mode={2}/>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(3)}>
        <div className="d-flex justify-content-between">
          <span>Groups</span>
          <AddGroupButton mode={3}/>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default SelectionMenuSidebar;