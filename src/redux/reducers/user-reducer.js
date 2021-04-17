import * as actionNames from '../constants/user-constants';

const defaultState = {
  id: null,
  username: null,
  email: null,
  role: null,
  roles: null,
  institution: null,
  group: null,
  loggingIn: false,
  signingUp: false,
  loggedIn: false,
  error: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionNames.LOGIN_REQUESTED:
      return {
        ...state,
        loggingIn: true
      }
    case actionNames.LOGIN_SUCCEED:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        role: action.payload.role,
        roles: action.payload.roles,
        institution: action.payload.institution,
        group: action.payload.group,
        loggingIn: false,
        loggedIn: true,
        error: null
      }
    case actionNames.LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    case actionNames.SIGNUP_REQUESTED:
      return {
        ...state,
        signingUp: true
      }
    case actionNames.SIGNUP_SUCCEED:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        role: action.payload.role,
        roles: action.payload.roles,
        institution: action.payload.institution,
        group: action.payload.group,
        loggedIn: true,
        signingUp: false,
        error: null
      }
    case actionNames.SIGNUP_FAILED:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
