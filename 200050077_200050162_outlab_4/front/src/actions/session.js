import * as apiUtil from '../utils/session';
import { receiveErrors } from "./error";


export const REC_CUR_USER = 'REC_CUR_USER';
export const LOGOUT_CUR_USER = 'LOGOUT_CUR_USER';
const receiveCurrentUser = user => ({
  type: REC_CUR_USER,
  user
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CUR_USER
});

export const login = user => async dispatch => {
  const response = await apiUtil.login(user);
  const data = await response.json();
  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data))
};
export const signup = user => async dispatch => {
  const response = await apiUtil.signup(user);
  const data = await response.json();
  
  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data))
};
export const logout = () => async dispatch => {
  const response = await apiUtil.logout();
  const data = await response.json();
if (response.ok) {
    return dispatch(logoutCurrentUser());
  }
  return dispatch(receiveErrors(data))
};
