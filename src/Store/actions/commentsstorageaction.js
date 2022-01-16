import {
  USER_COMMENTS,
  ADD_COMMENTS,
  COMMENTS_FAILED,
  PROMOS_LOADING,
  ADD_PROMOS,
  PROMOS_FAILED,
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

// export const fetchDishes = () => (dispatch) => {
//   return fetch(baseUrl + "dishes")
//     .then((response) => response.json())
//     .then((dishes) => dispatch(addDishes(dishes)));
// };
// export const fetchComments = () => (dispatch) => {
//   return fetch(baseUrl + "comments")
//     .then((response) => response.json())
//     .then((comments) => dispatch(addComments(comments)));
// };

export const commentsFailed = (errmess) => ({
  type: COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: PROMOS_LOADING,
});

export const promosFailed = (errmess) => ({
  type: PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos) => ({
  type: ADD_PROMOS,
  payload: promos,
});

// return fetch(baseUrl + 'dishes')
// .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//     }
//   },
//   error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//   })
// .then(response => response.json())
// .then(dishes => dispatch(addDishes(dishes)))
// .catch(error => dispatch(dishesFailed(error.message)));
// return fetch(baseUrl + 'dishes')
// .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//     }
//   },
//   error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//   })
// .then(response => response.json())
// .then(dishes => dispatch(addDishes(dishes)))
// .catch(error => dispatch(dishesFailed(error.message)));
