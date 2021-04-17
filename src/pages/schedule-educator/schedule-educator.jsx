import React from "react";
import DayEducator from "../../components/day-educator";
import { useSelector } from "react-redux";
import NavArrows from "../../components/nav-arrows";
import ModalEducator from "../../components/modal-educator";

const ScheduleEducator = () => {
  // const { role, roles } = useSelector((state) => state.user);
  //
  // if (!role || role !== roles?.educator) {
  //   return (window.location = `${process.env.REACT_APP_FRONTEND_API}`);
  // }

  return (
    <>
      {/*<ModalEducator />*/}
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
    </>
  );
};

export default ScheduleEducator;
