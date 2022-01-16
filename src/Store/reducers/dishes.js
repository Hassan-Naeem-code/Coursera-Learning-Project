import { DISHES } from "../../shared/dishes";
import { FETCH_DISHES, FETCH_DISHES_FAILED } from "../constants/actionTypes";

const INIT_STATE = {
  dishes: DISHES,
  dishesFetchError: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DISHES:
      return {
        ...state,
        dishes: action.payload,
      };
    case FETCH_DISHES_FAILED:
      return {
        ...state,
        dishesFetchError: action.payload,
      };
    default:
      return state;
  }
};
