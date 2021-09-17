import * as types from "./Action-types";
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from "../utils/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//!REGISTER
const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
//!Login
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
//!Logout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
const googleStart = () => ({
  type: types.GOOGLE_START,
});
const googleSuccess = (user) => ({
  type: types.GOOGLE_SUCCESS,
  payload: user,
});
const googleFail = (error) => ({
  type: types.GOOGLE_FAIL,
  payload: error,
});

const facebookStart = () => ({
  type: types.FACEBOOK_START,
});
const facebookSuccess = (users) => ({
  type: types.FACEBOOK_SUCCESS,
  payload: users,
});
const facebookFail = (error) => ({
  type: types.FACEBOOK_FAIL,
  payload: error,
});

//!REGISTER
export const registerInitial = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password, displayName)
      .then(({ user }) => {
        //todo:==> cap nhat ten nguoi dung firebase
        user.updateProfile({
          displayName: displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            dispatch(registerFail(toast.error(error.message)));
            break;
          case "auth/invalid-email":
            dispatch(registerFail(toast.error(error.message)));
            break;
          case "auth/weak-password":
            dispatch(registerFail(toast.error(error.message)));
            break;
        }
      });
  };
};

//!Login
export const loginInitial = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginSuccess(user, toast.success("Bạn đã đăng nhập thành công 😇"))
        );
      })
      .catch((error) => {
        dispatch(loginFail(toast.error(error.message)));
      });
  };
};

//!LOGOUT
export const logoutInitial = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(
          logoutSuccess(resp, toast.success("Bạn logout thành công 🥺 "))
        );
      })
      .catch((error) => {
        logoutFail(toast.error(error.message));
      });
  };
};

//!GOOGLE
export const googleInitial = () => {
  return function (dispatch) {
    dispatch(googleStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          googleSuccess(user),
          toast.success("Bạn đã đăng nhập thành công bằng Google 😉")
        );
      })
      .catch((error) => {
        dispatch(googleFail(error, toast.error("Bạn đăng nhập thất bại 🤔")));
      });
  };
};

//!FACEBOOK

export const facebookInitial = () => {
  return function (dispatch) {
    dispatch(facebookStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday,email"))
      .then(({ user }) => {
        dispatch(
          facebookSuccess(user),
          toast.success("Bạn đã đăng nhập thành công bằng Facebook 😍")
        );
      })
      .catch((error) => {
        dispatch(facebookFail(error, toast.error("Bạn đăng nhập thất bại 🙄")));
      });
  };
};

//!SET USER
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

//!SEARCH AND GET API
export const getRecipeStart = () => ({
  type: types.GET_RECIPE_START,
});
export const getRecipeSuccess = (get) => ({
  type: types.GET_RECIPE_SUCCESS,
  payload: get,
});
export const getRecipeFail = (error) => ({
  type: types.GET_RECIPE_FAIL,
  payload: error,
});
