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
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
