import * as types from "./Action-types";
const initialState = {
  recipes: [],
  error: null,
  loading: false,
};
const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
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
