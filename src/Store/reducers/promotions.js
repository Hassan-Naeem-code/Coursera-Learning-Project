import { PROMOTIONS } from "../../shared/promotions";
import {
  FETCH_PROMOTION,
  FETCH_PROMOTION_FAILED,
} from "../constants/actionTypes";

const INIT_STATE = {
  promotions: PROMOTIONS,
  promotionsFetchError: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PROMOTION:
      return {
        ...state,
        promotions: action.payload,
      };
    case FETCH_PROMOTION_FAILED:
      return {
        ...state,
        promotionsFetchError: action.payload,
      };
    default:
      return state;
  }
};
