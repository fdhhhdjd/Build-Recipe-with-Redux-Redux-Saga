import * as types from "./Action-types";
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
