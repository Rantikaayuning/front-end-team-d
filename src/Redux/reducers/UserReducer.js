import { SIGN_UP, SIGN_IN, SIGN_OUT, FAILED } from "../types/UserPage";

const initialState = {
  signUp: null,
  signIn: null,
  isAuthentificated: localStorage.getItem("token") ? true : false,
  token: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        signUp: payload,
        isAuthentificated: true,
      };
    case SIGN_IN:
      return {
        ...state,
        signIn: payload,
        isAuthentificated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: undefined,
        isAuthentificated: false,
      };

      case FAILED :
        return{
          ...state,
          token: undefined,
        isAuthentificated: false,
        }
    default:
      break;
  }
  return state;
};

export default userReducer;
