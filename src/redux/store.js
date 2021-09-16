import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../redux/root-reducer";
import rootSaga from "./Saga";
import thunk from "redux-thunk";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk]; //!saga
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga); //!saga
export default store;
