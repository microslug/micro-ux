import { combineReducers } from 'redux';
import MicroReducer from '../reducers/reducer_api';


const rootReducer = combineReducers({
  microAPI: MicroReducer
});

export default rootReducer;
