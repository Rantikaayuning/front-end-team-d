import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../types/UserPage";
import axios from "axios";

export const postSignUp = (body) => (dispatch) => {
  axios
    .post("https://bbm-warehouse.herokuapp.com/register", body)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGN_UP,
          payload: response.data.data,
        });
        alert("Sign Up Success");
      }
    });
};

export const postSignIn = (body) => (dispatch) => {
  axios
    .post("https://bbm-warehouse.herokuapp.com/login", body)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGN_IN,
          payload: response.data.message,
          token: localStorage.setItem("token", response.data.data.token),
        });
      }
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};
