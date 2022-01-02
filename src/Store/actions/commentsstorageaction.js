import { USER_COMMENTS } from "../constants/actionTypes";

export function submitCommentsData(user_comment) {
  return async (dispatch) => {
    dispatch({
      type: USER_COMMENTS,
      payload: user_comment,
    });
  };
}
