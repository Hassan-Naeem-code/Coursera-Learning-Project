import { COMMENTS } from "../../shared/comments";
import { USER_COMMENTS } from "../constants/actionTypes";

const INIT_STATE = {
  comments: COMMENTS,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_COMMENTS:
      const commentsClone = state.comments.slice(0);
      // const temporary_list_for_user_comment = [];
      // temporary_list_for_user_comment.push(action.payload);
      // console.log("commentsClone action.payload", action.payload);
      commentsClone.push(action.payload);
      console.log("commentsClone data added in it", commentsClone);
      return {
        ...state,
        comments: commentsClone,
      };
    default:
      return state;
  }
};
