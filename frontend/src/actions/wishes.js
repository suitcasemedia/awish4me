import * as wishesAPIUtil from '../utils/API';
// export const RECEIVE_WISHES = "RECEIVE_WISHES";
//export const RECEIVE_WISH = "RECEIVE_WISH";

//Wishes list
export const FETCH_WISHES = 'FETCH_WISHES';
export const FETCH_WISHES_SUCCESS = 'FETCH_WISHES_SUCCESS';
export const FETCH_WISHES_FAILURE = 'FETCH_WISHES_FAILURE';
export const RESET_WISHES = 'RESET_WISHES';

export const receiveWishes = wishes => ({
  type: FETCH_WISHES,
  wishes
});
export const fetchWishes = ()=> dispatch=>(
  wishesAPIUtil.fetchWishes()
  .then(response =>  dispatch(receiveWishes(response)))
  
 )

export function fetchWishesSuccess(wishes) {
  return {
    type: FETCH_WISHES_SUCCESS,
    payload: wishes
  };
}

export function fetchWishesFailure(error) {
  return {
    type: FETCH_WISHES_FAILURE,
    payload: error
  };
}
