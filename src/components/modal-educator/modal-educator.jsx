import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './modal-educator.scss';

// import ScheduleService from '../../api/services/schedule-service';

// const scheduleService = new ScheduleService();

const ModalEducator = ({
                         students = [],
                         scheduleCellId,
                         educatorID,
                         onSubmitHandler,
                         homework,
                       }) => {
  const [grades, setGrades] = useState([]);

  const inputHandler = (e, id) => {
    setGrades(prevState => {
      const idx = prevState.findIndex(item => item.id === id);

      if (typeof idx !== 'number') {
        const newStudent = {
          studentID: id,
          grade: +e.target.value,
          scheduleCellId,
          educatorID,
        };

        return {...prevState, newStudent};
      }

      return [
        ...prevState.slice(0, idx),
        ...prevState.slice(idx + 1, 0),
        {
          studentID: id,
          grade: +e.target.value,
          scheduleCellId,
          educatorID,
        },
      ];
    });
  };

  const StudentItems = students.map(({firstName, lastName, id}) => {
    return (
      <div key={id} className='item-student'>
        <span>{firstName} {lastName}</span> <input
        onInput={e => inputHandler(e, id)} type='number'/>
      </div>
    );

  });

  // const onSubmitHandler = () => {
  //   Promise.all(
  //     grades.map(item => {
  //       scheduleService.createNewGrade(item);
  //     })
  //   ).then(res => {
  //
  //   })
  // };


const ModalEducator = ({ handleClose, homework, scheduleID, students, show }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <div className="modal-educator">
        <div className="container">
          <div className="row">
            <div className="col-7">

              <h5>Group</h5>
              <div className='left-col'>
                <div className='student-grade'>
                  {StudentItems}
                </div>
              </div>
            </div>
            <div className='col-5 textarea-wrapper'>
              <h5>Homework</h5>
              <textarea/>
            </div>
          </div>
          <div className='row modal-educator-footer'>
            <div className='col-7 mt-3 mb-3'>
              <div className='row'>
                <button className='col-5 btn btn-primary'
                  onSubmit={() => onSubmitHandler(grades)}>Save
                </button>
                <button className='col-5 btn btn-danger'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
;

export default ModalEducator;
