import { useEffect, useState } from "react";
import { useScheduleService } from "../../api/context/scheduleServiceContext";
import { useSelector } from "react-redux";

const useSchedule = () => {
  const [schedule, setSchedule] = useState({});
  const [isGetData, setIsGetData] = useState(false);
  const [error, isError] = useState(false);
  const [requested, setRequested] = useState(false);
  const [date, setDate] = useState(new Date());
  const context = useScheduleService();

  // const id = useSelector((state) => {
  //   state.userReduser.id;
  // });

  const getData = async () => {
    try {
      console.log(useScheduleService);
      setRequested(true);

      const data = await context.getWeekScheduleByWeekNo(
        "607a834be806c63274f94b22",
        date.getTime()
      );

      console.log('data', date.getTime())
      setSchedule(data);
      setRequested(false);
    } catch (e) {
      console.log(e)
      isError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [date]);

  const next = () => {
    setDate(date.setDate(date.getDate() + 7));
  };

  const back = () => {
    setDate(date.setDate(date.getDate() - 7));
  };

  return { schedule, next, back, requested };
};

export default useSchedule;
