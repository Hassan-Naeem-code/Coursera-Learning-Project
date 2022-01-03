import { PROMOTIONS } from "../../shared/promotions";

const INIT_STATE = {
  promotions: PROMOTIONS,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
