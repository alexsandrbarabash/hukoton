import React from "react";
import "./schedule-creator.scss";
import DayCreator from "../../components/day-creator";
import { useSelector } from "react-redux";
import NavArrows from "../../components/nav-arrows";
import ModalCreator from "../../components/modal-creator/modal-creator";

const ScheduleCreator = () => {


  // const { role, roles } = useSelector((state) => state.user);
  //
  // if (!role || role !== roles?.creator) {
  //   return (window.location = `${process.env.REACT_APP_FRONTEND_API}`);
  // }

  return (
    <>
      {/*<ModalCreator />*/}
      <div className="schedule-wrapper">
        <NavArrows />
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
    </>
  );
};

export default ScheduleCreator;
