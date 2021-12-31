import { LEADERS } from "../../shared/leaders";

const INIT_STATE = {
  leaders: LEADERS,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // case GET_ORDERS_DATA:
    //   return {
    //     ...state,
    //     orders: action.payload,
    //   };
    default:
      return state;
  }
};
