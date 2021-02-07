import { combineReducers } from 'redux';
import { carDetailsReducer as carDetails } from '../ducks/carDetails';

export default combineReducers({
    carDetails,
})