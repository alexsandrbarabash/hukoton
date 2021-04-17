import React, {useEffect, useState} from 'react';

import './add-educator-button.scss';
import ModalAddStudent from "../modal-add-student";
import ModalAddGroup from "../modal-add-group";
import ModalAddEducator from "../modal-add-educator";

const AddEducatorButton = (mode) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const onClickHandler = () => {
    setShow(!show);
  }

  return (
    <>
      <button className="btn btn-primary add-item-button" onClick={onClickHandler}>+</button>
      <ModalAddEducator mode={mode} show={show} setShow={setShow}/>
    </>
  )
}

export default AddEducatorButton;