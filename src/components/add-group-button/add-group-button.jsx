import React, {useEffect, useState} from 'react';

import './add-group-button.scss';
import ModalAddGroup from "../modal-add-group";

const AddGroupButton = (mode) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const onClickHandler = () => {
    setShow(!show);
  }

  return (
    <>
      <button className="btn btn-primary add-item-button" onClick={onClickHandler}>+</button>
      <ModalAddGroup mode={mode} show={show} setShow={setShow}/>
    </>
  )
}

export default AddGroupButton;