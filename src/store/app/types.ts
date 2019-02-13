import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type AppActions = ActionType<typeof actions>;

//Declare state types with 'readonly' to get compile time immutability
export interface CryptoMarketState {
  searchSymbol: string;
  readonly cryptoLoading: boolean;
  readonly data: CryptoMarketData[];
  readonly errors?: string;
}

export type ApiResponse = Record<string, any>;

export interface CryptoMarketData extends ApiResponse {
  status: string;
  symbol?: string;
  price?: number;
}
