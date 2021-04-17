import React from "react";
import DayStudent from "../../components/day-student";
import NavArrows from "../../components/nav-arrows";
import { useSelector } from "react-redux";

const ScheduleStudent = () => {
  const { role, roles } = useSelector((state) => state.user);

  if (!role || role !== roles?.student) {
    return window.location = `${process.env.REACT_APP_FRONTEND_API}`;
  }

  return (
    <div className="schedule-wrapper">
      <NavArrows />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <DayStudent />
          </div>
          <div className="col-4">
            <DayStudent />
          </div>
          <div className="col-4">
            <DayStudent />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <DayStudent />
          </div>
          <div className="col-4">
            <DayStudent />
          </div>
          <div className="col-4">
            <DayStudent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStudent;
