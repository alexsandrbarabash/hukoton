import { LOGIN } from "../constants/user-constants";



const actionLogin = () => {
    type: LOGIN;
    payload: data;
};

export const next = ({}) => {
    return async (dispatch) => {
        dispatch(actionLogin);
    };
};

export const back = () => {
    return async (dispatch) => {
        dispatch(actionLogin);
    };
};