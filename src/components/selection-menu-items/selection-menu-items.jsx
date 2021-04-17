import React, {useEffect, useState} from 'react';
import './selection-menu-items.scss'
import {ListGroup} from "react-bootstrap";


const SelectionMenuItems = ({items, mode}) => {
  const [renderItems, setRenderItems] = useState([]);

  useEffect(() => {
    if (mode === 1) { // Educators
      setRenderItems(items.map(i => {
        // console.log(i);
        return (<ListGroup.Item key={i._id || i.id} className='selection-item'>{i.firstName + ' ' + i.lastName}</ListGroup.Item>)
      }));
    }
    else if (mode === 2) {
      setRenderItems(items.map(i => {
        console.log(i);
        return (<ListGroup.Item key={i.id || i._id} className='selection-item'>{i.firstName + ' ' + i.lastName + ' ' + i?.group?.name}</ListGroup.Item>)
      }));
    }
    else if (mode === 3) {
      setRenderItems(items.map(i => {
        // console.log(i);
        return (<ListGroup.Item key={i._id || i.id} className='selection-item'>{i.name}</ListGroup.Item>)
      }));
    }
  }, [items, mode]);

  if (renderItems.length === 0) {
    return (<p>List is empty</p>);
  }

  return (
    <ListGroup>
      {renderItems}
    </ListGroup>
  )
}

export default SelectionMenuItems;