import { useContext, createContext } from 'react';
import { GroupService } from '../services/group-service';

const GroupServiceContext = createContext(new GroupService());

export const useGroupService = () => useContext(GroupServiceContext);

export default GroupServiceContext.Provider;