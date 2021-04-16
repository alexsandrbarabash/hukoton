import React from "react";
import DayEducator from "../../component/day-educator";

const ScheduleEducator = () => {
  return (
    <div className="schedule-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <DayEducator />
          </div>
          <div className="col-4">
            <DayEducator />
          </div>
          <div className="col-4">
            <DayEducator />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <DayEducator />
          </div>
          <div className="col-4">
            <DayEducator />
          </div>
          <div className="col-4">
            <DayEducator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEducator;
