import React from "react";
import DayStudent from "../../components/day-student";
import NavArrows from "../../components/nav-arrows";
import { useSelector } from "react-redux";
import ModalStudent from "../../components/modal-student";
import useSchedule from "../../common/customs_hooks/schedule-student-hook";
import Spinner from "../../components/spinner";
import {login} from "../../redux/actions";

const ScheduleStudent = () => {
  // const { role, roles } = useSelector((state) => state.user);
  //
  // if (!role || role !== roles?.student) {
  //   return window.location = `${process.env.REACT_APP_FRONTEND_API}`;
  // }

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
      <ModalStudent />
      <div className="schedule-wrapper">
        {/*<NavArrows onBack={back} onNext={next} />*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <DayStudent data={schedule.day0} />
            </div>
            <div className="col-4">
              <DayStudent name="Tuesday" data={schedule.day1} />
            </div>
            <div className="col-4">
              <DayStudent name="Wednesday" data={schedule.day2} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <DayStudent name="Thursday" data={schedule.day3} />
            </div>
            <div className="col-4">
              <DayStudent name="Friday" data={schedule.day4} />
            </div>
            <div className="col-4">
              <DayStudent name="Saturday" data={schedule.day5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleStudent;
