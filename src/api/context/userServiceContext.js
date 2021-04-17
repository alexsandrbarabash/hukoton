import { useContext, createContext } from 'react';
import { UserService } from '../services/user-service';

const UserServiceContext = createContext(new UserService());

export const useUserService = () => useContext(UserServiceContext);

export default UserServiceContext.Provider;