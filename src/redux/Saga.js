import {
  call,
  put,
  takeEvery,
  takeLatest,
  fork,
  all,
} from "redux-saga/effects";
import * as types from "./Action-types";
import { getRecipes } from "../utils/Api";

//! fetch Api
function* onLoadRecipeAsync({ query }) {
  try {
    const response = yield call(getRecipes, query);
    yield put({ type: types.GET_RECIPE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.GET_RECIPE_FAIL, payload: error });
  }
}
export function* onLoadRecipe() {
  yield takeLatest(types.GET_RECIPE_START, onLoadRecipeAsync);
}
// !run saga
const contactsSaga = [fork(onLoadRecipe)];
export default function* rootSaga() {
  yield all([...contactsSaga]);
}
