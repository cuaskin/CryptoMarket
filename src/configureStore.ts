import { Store, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApplicationState, rootReducer } from "./store";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnchars = composeWithDevTools({});
  const store = createStore(rootReducer, initialState, composeEnchars());
  return store;
}
