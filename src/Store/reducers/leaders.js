import { LEADERS } from "../../shared/leaders";

const INIT_STATE = {
  leaders: LEADERS,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
