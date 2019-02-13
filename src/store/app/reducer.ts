import { CryptoMarketState } from "./types";
import { Constants } from "./constants";
import { Reducer } from "redux";

const initialState: CryptoMarketState = {
  searchSymbol: "",
  data: [],
  errors: undefined,
  cryptoLoading: false
};

export const cryptoReducer: Reducer<CryptoMarketState> = (
  state: CryptoMarketState = initialState,
  action: any
): CryptoMarketState => {
  const { type, payload } = action;

  switch (type) {
    case Constants.FETCH_REQUEST:
      return {
        ...state,
        cryptoLoading: true
      };

    case Constants.FETCH_SUCCESS:
      return {
        ...state,
        cryptoLoading: false,
        data: payload
      };

    case Constants.FETCH_ERROR:
      return {
        ...state,
        cryptoLoading: false,
        data: payload
      };

    case Constants.SEARCH_SYMBOL:
      return {
        ...state,
        searchSymbol: payload
      };

    default:
      return state;
  }
};
