import { combineReducers } from 'redux';
import homePageReducer from './reducers/homePage';
import loginPageReducer from './reducers/loginPage';

export default combineReducers({
    homePage: homePageReducer,
    loginPage: loginPageReducer,
})
