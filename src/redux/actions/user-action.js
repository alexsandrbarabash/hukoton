import * as actionNames from "../constants/user-constants";
import CommonService from '../../api/services/common-service';
import GroupService from '../../api/services/group-service';
import UserService from '../../api/services/user-service';

const loginRequested = () => {
  return {
    type: actionNames.LOGIN_REQUESTED
  }
}

const loginSucceed = (payload) => {
  return {
    type: actionNames.LOGIN_SUCCEED,
    payload: payload
  }
}

const loginFailed = (err) => {
  return {
    type: actionNames.LOGIN_FAILED,
    payload: err
  }
}

const signupRequested = () => {
  return {
    type: actionNames.SIGNUP_REQUESTED
  }
}

const signupSucceed = (payload) => {
  return {
    type: actionNames.SIGNUP_SUCCEED,
    payload: payload
  }
}

const signupFailed = (err) => {
  return {
    type: actionNames.SIGNUP_FAILED,
    payload: err
  }
}

const login = (username, password) => async (dispatch, getState) => {
  dispatch(loginRequested());
  const userService = new UserService();

  try {
    const response = await userService.login({
      username,
      password
    });
    dispatch(loginSucceed(response.data.user));
  }
  catch (e) {
    console.log(e.response.data);
    dispatch(loginFailed(JSON.stringify(e.response)));
  }
}

const signup = (body) => async (dispatch, getState) => {
  dispatch(signupRequested());
  const userService = new UserService();

  try {
    const response = await userService.signup(body);
    dispatch(signupSucceed(response.data.user));
  }
  catch (e) {
    console.log(e.response.data);
    dispatch(signupFailed(JSON.stringify(e.response)));
  }
}

export {
  login,
  signup
}
