import React from "react";
import "./schedule-creator.scss";
import DayCreator from "../../component/day-creator";

const ScheduleCreator = () => {
  return (
    <div className="schedule-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <DayCreator />
          </div>
          <div className="col-4">
            <DayCreator />
          </div>
          <div className="col-4">
            <DayCreator />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <DayCreator />
          </div>
          <div className="col-4">
            <DayCreator />
          </div>
          <div className="col-4">
            <DayCreator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCreator;
