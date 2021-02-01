import { OPEN_LOGIN } from '../types/loginPage';

let initialState = {
    isModalOpen: false,
}

const loginPageReducer = (state = initialState, action) => {
    if (action.type === OPEN_LOGIN){
        return {
            ...state,
            isModalOpen: true,
        }
    }
    return state;
}

export default loginPageReducer;