import { LOGIN } from "../constants/user-constants";

const defaultState = {
  login: false,
  role: null,
  roles: null,
  firstName: null,
  lastName: null,
  email: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        role: action.payload.role,
        roles: action.payload.roles,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        login: true,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
