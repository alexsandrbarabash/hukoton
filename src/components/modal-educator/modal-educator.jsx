import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./modal-educator.scss";

const ItemStudent = ({ name, value }) => {
  return (
    <div className="item-student">
      <span>{name}</span> <input type="text" value={value} />
    </div>
  );
};

const ModalEducator = ({
  handleClose,
  homework,
  scheduleID,
  students,
  show,
}) => {
  const [task, setTask] = useState("");
  const [state, setState] = useState(students);
  const onChangeHandler = (id, value) => {
    const index = state.findIndex((s) => s.id === id);
    setState((state) => {
      return [
        ...state.slice(0, index),
        { ...state[index], grade: state[index].grade },
        ...state.slice(index + 1),
      ];
    });
  };
  console.log(state, 'ASDASDASDASDADSASD');
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-educator">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h5>Group</h5>
              <div className="left-col">
                <div className="student-grade">
                  {students.map((item) => (
                    <ItemStudent id={item.id} name={`${item.lastName}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-5 textarea-wrapper">
              <h5>Homework</h5>
              <textarea onChange={(e) => setTask(e.target.value)}>
                {homework}
              </textarea>
            </div>
          </div>
          <div className="row modal-educator-footer">
            <div className="col-7 mt-3 mb-3">
              <div className="row">
                <button className="col-5 btn btn-primary ">Save</button>
                <button className="col-5 btn-outline-primary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalEducator;
