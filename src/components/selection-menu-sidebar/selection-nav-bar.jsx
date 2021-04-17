import React from 'react';
import './selection-nav-bar.scss'
import {ListGroup} from "react-bootstrap";


const SelectionMenuSidebar = ({toggleHandler}) => {

  return (
    <ListGroup>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(1)}>Educators</ListGroup.Item>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(2)}>Students</ListGroup.Item>
      <ListGroup.Item className='selection-item' onClick={() => toggleHandler(3)}>Groups</ListGroup.Item>
    </ListGroup>
  )
}

export default SelectionMenuSidebar;