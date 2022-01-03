import { DISHES } from "../../shared/dishes";

const INIT_STATE = {
  dishes: DISHES,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
