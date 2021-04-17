import { LOGIN } from "../constants/user-constants";



const actionLogin = () => {
  type: LOGIN;
  payload: data;
};

export const login = ({}) => {
  return async (dispatch) => {
    dispatch(actionLogin);
  };
};

export const register = () => {
  return async (dispatch) => {
    dispatch(actionLogin);
  };
};