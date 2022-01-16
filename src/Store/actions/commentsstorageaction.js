import {
  USER_COMMENTS,
  FETCH_DISHES,
  FETCH_DISHES_FAILED,
  FETCH_LEADER,
  FETCH_LEADER_FAILED,
  FETCH_PROMOTION,
  FETCH_PROMOTION_FAILED,
} from "../constants/actionTypes";
import { baseUrl } from "../../shared/baseUrl";
export function submitCommentsData(user_comment) {
  return async (dispatch) => {
    dispatch({
      type: USER_COMMENTS,
      payload: user_comment,
    });
  };
}

export function fetchDishes() {
  return async (dispatch) => {
    fetch(baseUrl + "dishes")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((dishes) =>
        dispatch({
          type: FETCH_DISHES,
          payload: dishes,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_DISHES_FAILED,
          payload: error,
        })
      );
  };
}
export function fetchLeaders() {
  return async (dispatch) => {
    fetch(baseUrl + "leaders")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((leaders) =>
        dispatch({
          type: FETCH_LEADER,
          payload: leaders,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_LEADER_FAILED,
          payload: error,
        })
      );
  };
}
export function fetchPromotion() {
  return async (dispatch) => {
    fetch(baseUrl + "promotions")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((promotions) =>
        dispatch({
          type: FETCH_PROMOTION,
          payload: promotions,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_PROMOTION_FAILED,
          payload: error,
        })
      );
  };
}
export function postFeedBackForm(newComment) {
  return async (dispatch) => {
    fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) =>
        alert(`Thank you for your Feedback! \n ${JSON.stringify(response)}`)
      )
      .catch((error) => {
        console.log("post comments", error.message);
        alert("Your comment could not be posted\nError: " + error.message);
      });
  };
}
