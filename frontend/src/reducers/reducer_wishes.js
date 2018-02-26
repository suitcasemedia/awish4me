import {
	FETCH_WISHES, FETCH_WISHES_SUCCESS, FETCH_WISHES_FAILURE, RESET_WISHES,
	
} from '../actions/wishes';


const INITIAL_STATE = { wishesList: {wishes: [], error:null, loading: true},}  
							


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_WISHES:// start fetching wishes and set loading = true
  	return { ...state, wishesList: {wishes:[], error: null, loading: true} }; 
  case FETCH_WISHES_SUCCESS:// return list of wishes and make loading = false
    return { ...state, wishesList: {wishes: action.payload, error:null, loading: false} };
  case FETCH_WISHES_FAILURE:// return error and make loading = false
   
    error = action.payload || {message: action.payload};//2nd one is network or server down errors
    return { ...state, wishesList: {wishes: [], error: error, loading: false} };
  case RESET_WISHES:// reset postList to initial state
    return { ...state, wishesList: {wishes: [], error:null, loading: false} };

  default:
    return state;
  }
}