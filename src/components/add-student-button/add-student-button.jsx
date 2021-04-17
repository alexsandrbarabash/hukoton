import React, {useEffect, useState} from 'react';

import './add-student-button.scss';
import ModalAddStudent from "../modal-add-student";

const AddStudentButton = (mode) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const onClickHandler = () => {
    setShow(!show);
  }

  return (
    <>
      <button className="btn btn-primary add-item-button" onClick={onClickHandler}>+</button>
      <ModalAddStudent mode={mode} show={show} setShow={setShow}/>
    </>
  )
}

export default AddStudentButton;