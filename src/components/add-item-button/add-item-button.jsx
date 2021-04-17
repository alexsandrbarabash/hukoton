import React, {useEffect, useState} from 'react';

import './add-item-button.scss';
import ModalAddStudent from "../modal-add-student";
import ModalAddGroup from "../modal-add-group";
import ModalAddEducator from "../modal-add-educator";

const AddItemButton = (mode) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);
  console.log(show);
  const onClickHandler = () => {
    setShow(!show);
  }
  useEffect(() => {
    if (mode === 1) {
      setModal(<ModalAddEducator mode={mode} show={show} setShow={setShow}/>);
    }
    else if (mode === 2) {
      setModal(<ModalAddStudent mode={mode} show={show} setShow={setShow}/>);
    }
    else if (mode === 3) {
      setModal(<ModalAddGroup mode={mode} show={show} setShow={setShow}/>);
    }
  }, [mode, show]);


  return (
    <>
      <button className="btn btn-primary add-item-button" onClick={onClickHandler}>+</button>
      {modal}
    </>
  )
}

export default AddItemButton;