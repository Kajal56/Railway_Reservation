import {
  REC_CUR_USER,
  LOGOUT_CUR_USER
} from "../../actions/session";
const _nullSession = { userId: null, username: null }
export default (state = _nullSession, { type, user }) => {
  Object.freeze(state);
  switch (type) {
    case REC_CUR_USER:
      return user;
    case LOGOUT_CUR_USER:
      return _nullSession;
    default:
      return state;
  }
};