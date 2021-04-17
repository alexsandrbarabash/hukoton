import { useEffect, useState } from "react";
import { useScheduleService } from "../../api/context/scheduleServiceContext";
import { useSelector } from "react-redux";
import ScheduleService from "../../api/services/schedule-service";

const useSchedule = () => {
  const [schedule, setSchedule] = useState({});
  const [isGetData, setIsGetData] = useState(false);
  const [error, isError] = useState(false);
  const [requested, setRequested] = useState(false);
  const [date, setDate] = useState(new Date());
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
        date.getTime()
      );
      setIsGetData(true)
      console.log('data', data)
      setSchedule(data);
      setRequested(false);

    } catch (e) {
      console.log("e",e)
      isError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [date]);

  const next = () => {
    setIsGetData(false)
    setDate(date.setDate(date.getDate() + 7));
  };

  const back = () => {
    setIsGetData(false)
    setDate(date.setDate(date.getDate() - 7));
  };

  return { schedule, next, back, requested, error, isGetData };
};

export default useSchedule;
