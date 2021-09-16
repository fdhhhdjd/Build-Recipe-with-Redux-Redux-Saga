import * as types from "./Action-types";
import { auth } from "../utils/firebase";
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
