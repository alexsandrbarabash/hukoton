import React, { useState } from "react";
import DayEducator from "../../components/day-educator";
import { useSelector } from "react-redux";
import NavArrows from "../../components/nav-arrows";
import ModalEducator from "../../components/modal-educator";
import useSchedule from "../../common/customs_hooks/schedule-student-hook";
import Spinner from "../../components/spinner";

const ScheduleEducator = () => {
  // const { role, roles } = useSelector((state) => state.user);
  //
  // if (!role || role !== roles?.educator) {
  //   return (window.location = `${process.env.REACT_APP_FRONTEND_API}`);
  // }

  const [students, setStudents] = useState([]);
  const [scheduleID, setScheduleID] = useState("");
  const [homework, setHomework] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (studentsMy, scheduleIDMy, homeworkMy) => {
    setStudents(students);
    setScheduleID(scheduleID);
    setHomework(homework);
    setShow(true);
  };

  const { schedule, requested, next, back, error, isGetData } = useSchedule();

  if (error) {
    return null;
  }

  if (!isGetData) {
    return null;
  }

  if (requested) {
    return <Spinner />;
  }

  return (
    <>
      <ModalEducator
        students={students}
        scheduleID={scheduleID}
        homework={homework}
        handleClose={handleClose}
        show={show}
      />
      <div className="schedule-wrapper">
        <NavArrows />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <DayEducator data={schedule.day0} showModal={handleShow} />
            </div>
            <div className="col-4">
              <DayEducator data={schedule.day1} />
            </div>
            <div className="col-4">
              <DayEducator data={schedule.day2} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <DayEducator data={schedule.day3} />
            </div>
            <div className="col-4">
              <DayEducator data={schedule.day4} />
            </div>
            <div className="col-4">
              <DayEducator data={schedule.day5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleEducator;
