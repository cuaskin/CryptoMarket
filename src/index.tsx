import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const initialState = window.initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
