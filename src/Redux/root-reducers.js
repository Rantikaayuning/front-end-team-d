import { combineReducers } from 'redux';
import homePageReducer from './reducers/HomePage';

export default combineReducers({
    homePage: homePageReducer,
})
