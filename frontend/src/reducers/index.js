import { combineReducers } from 'redux';
import wishesReducer from './reducer_wishes';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({

  wishes: wishesReducer, //<-- Posts
  form: formReducer, // <-- redux-form
 
});

export default rootReducer;