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
    const data = await userService.login({
      username,
      password
    });
    dispatch(loginSucceed(data.user));
  }
  catch (e) {
    dispatch(loginFailed(JSON.stringify(e.message)));
  }
}

const signup = (body) => async (dispatch, getState) => {
  dispatch(signupRequested());
  const userService = new UserService();

  try {
    const data = await userService.signup(body);
    console.log((data.user));
    dispatch(signupSucceed(data.user));
  }
  catch (e) {
    console.log(e.message);
    dispatch(signupFailed(e.message));
  }
}

export {
  login,
  signup
}
