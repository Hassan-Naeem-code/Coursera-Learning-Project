import { LEADERS } from "../../shared/leaders";
import { FETCH_LEADER, FETCH_LEADER_FAILED } from "../constants/actionTypes";
const INIT_STATE = {
  leaders: LEADERS,
  leadersFetchError: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_LEADER:
      return {
        ...state,
        leaders: action.payload,
      };
    case FETCH_LEADER_FAILED:
      return {
        ...state,
        leadersFetchError: action.payload,
      };
    default:
      return state;
  }
};
