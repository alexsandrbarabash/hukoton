import { useContext, createContext } from 'react';
import ScheduleService from '../services/schedule-service';

const ScheduleServiceContext = createContext(new ScheduleService());

export const useScheduleService = () => useContext(ScheduleServiceContext);

export default ScheduleServiceContext.Provider;