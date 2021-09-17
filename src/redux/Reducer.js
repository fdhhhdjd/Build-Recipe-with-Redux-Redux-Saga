import * as types from "./Action-types";
const initialState = {
  recipes: [],
  error: null,
  loading: false,
  currentUser: null,
};
const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.GOOGLE_START:
    case types.FACEBOOK_START:
      return {
        ...state,
        loading: true,
      };

    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SUCCESS:
    case types.FACEBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.GOOGLE_FAIL:
    case types.FACEBOOK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.GET_RECIPE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };
    case types.GET_RECIPE_START:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default RecipeReducer;
