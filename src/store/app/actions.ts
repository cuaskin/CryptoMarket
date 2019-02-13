import { action } from "typesafe-actions";
import { Constants } from "./constants";
import { CryptoMarketData } from "./types";

export const searchSymbol = (searchSymbol: string) => {
  return action(Constants.SEARCH_SYMBOL, { searchSymbol });
};

//Call Api
export const fetchRequest = () => {
  return action(Constants.FETCH_REQUEST);
};

export const fetchSuccess = (data: CryptoMarketData[]) => {
  return action(Constants.FETCH_SUCCESS, data);
};

export const fetchError = (errors: string) => {
  return action(Constants.FETCH_ERROR, errors);
};
