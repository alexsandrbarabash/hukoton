import React from "react";
import DayStudent from "../../component/day-student";

const ScheduleStudent = () => {
  return (
    <div className="schedule-wrapper">
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