import { combineReducers } from "redux";
import Dishes from "./dishes";
import Leaders from "./leaders";
import Comments from "./comments";
import Promotions from "./promotions";

export default combineReducers({
  dishesStorage: Dishes,
  leadersStorage: Leaders,
  Comments: Comments,
  promotionsStorage: Promotions,
});
