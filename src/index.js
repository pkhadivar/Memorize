import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "./reducers";
import rootReducer from "./reducers";

import App from "./App";

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

const store = configureStore({ reducer: rootReducer });

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
