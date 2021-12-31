import { DISHES } from "../../shared/dishes";

const INIT_STATE = {
  dishes: DISHES,
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
