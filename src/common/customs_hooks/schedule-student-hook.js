import { useEffect, useState } from "react";
import { useScheduleService } from "../../api/context/scheduleServiceContext";
import { useSelector } from "react-redux";
import ScheduleService from "../../api/services/schedule-service";

const useSchedule = () => {
  const [schedule, setSchedule] = useState({});
  const [isGetData, setIsGetData] = useState(false);
  const [error, isError] = useState(false);
  const [requested, setRequested] = useState(false);
  const [date, setDate] = useState(new Date().getTime());
  // const context = useScheduleService();

  // const id = useSelector((state) => {
  //   state.userReduser.id;
  // });

  const getData = async () => {
    try {
      const context = new ScheduleService();
      setRequested(true);


      const data = await context.getWeekScheduleByWeekNo(
        "607a8344e806c63274f94b21",
        date
      );
      setIsGetData(true);
      setSchedule(data);
      setRequested(false);
    } catch (e) {
      isError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [date]);

  const next = () => {
    setIsGetData(false);
    // setDate(date.setDate(getDate() + 7));
    const currentData = new Date();
    currentData.setDate(currentData.getDate() + 7);
    const newTime = currentData.getTime();
    setDate(newTime);
  };

  const back = () => {
    setIsGetData(false);
    const currentData = new Date();
    currentData.setDate(currentData.getDate() - 7);
    const newTime = currentData.getTime();
    setDate(newTime);
  };

  return { schedule, next, back, requested, error, isGetData };
};

export default useSchedule;
