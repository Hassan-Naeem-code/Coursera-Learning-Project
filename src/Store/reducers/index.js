import { combineReducers } from "redux";
import Dishes from "./dishes";
import Leaders from "./leaders";
import Promotions from "./promotions";
export default combineReducers({
  dishesStorage: Dishes,
  leadersStorage: Leaders,
  promotionsStorage: Promotions,
});
