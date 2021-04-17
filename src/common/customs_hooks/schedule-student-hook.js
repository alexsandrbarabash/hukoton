import { useEffect, useState } from "react";
import { useScheduleService } from "../../api/context/scheduleServiceContext";
import { useSelector } from "react-redux";

const useStudent = () => {
  const [schedule, setSchedule] = useState([]);
  const [isGetData, setIsGetData] = useState(false);
  const [error, isError] = useState(false);
  const [requested, setRequested] = useState(false);
  const [date, setDate] = useState(new Date().getTime());
  const context = useScheduleService();
  const id = useSelector((state) => {
    state.userReduser.id;
  });

  const getData = async () => {
    try {
      setRequested(true);

      const data = await context.getWeekScheduleByWeekNo(id, date.getTime());

      setRequested(false);
    } catch (e) {
      isError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [setDate]);

  const next = () => {};

  const back = () => {};

  return schedule;
};
