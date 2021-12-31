import { PROMOTIONS } from "../../shared/promotions";

const INIT_STATE = {
  promotions: PROMOTIONS,
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
