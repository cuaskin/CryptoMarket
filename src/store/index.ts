import {CryptoMarketState} from "./app/types";
import {combineReducers } from "redux";
import { cryptoReducer } from "./app/reducer";

//The top-level state object
export interface ApplicationState {
  cryptoMarkets: CryptoMarketState;
}

export const rootReducer = combineReducers<ApplicationState>({
  cryptoMarkets: cryptoReducer
});
