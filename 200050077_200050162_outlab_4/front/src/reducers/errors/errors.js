import { REC_CUR_USER } from "../../actions/session";
import { CLEAR_ERRORS, RECEIVE_ERRORS } from "../../actions/error";
export default (state = "", { message, type }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case REC_CUR_USER:
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};