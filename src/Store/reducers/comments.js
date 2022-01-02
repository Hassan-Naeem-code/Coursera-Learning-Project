import { COMMENTS } from "../../shared/comments";
import { USER_COMMENTS } from "../constants/actionTypes";

const INIT_STATE = {
  comments: COMMENTS,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_COMMENTS:
      const commentsClone = state.comments.slice(0);
      commentsClone.concat(action.payload);
      return {
        ...state,
        comments: commentsClone,
      };
    default:
      return state;
  }
};
