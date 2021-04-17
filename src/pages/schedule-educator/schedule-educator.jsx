import React from "react";
import DayEducator from "../../components/day-educator";
import { useSelector } from "react-redux";
import NavArrows from "../../components/nav-arrows";

const ScheduleEducator = () => {
  const { role, roles } = useSelector((state) => state.user);

  if (!role || role !== roles?.educator) {
    return (window.location = `${process.env.REACT_APP_FRONTEND_API}`);
  }

  return (
    <div className="schedule-wrapper">
      <NavArrows />
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
