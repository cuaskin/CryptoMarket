import { Dispatch } from "react";
import { AppActions } from "./types";
import * as actions from "./actions";
import axios from "axios";

export const API = axios.create({
  baseURL: `http://localhost:3001/coin/`
});

export async function getData(
  dispatch: Dispatch<AppActions>,
  searchSymbol: string
) {
  await API.get(`${searchSymbol}`)
    .then((res: { data: any }) => {
      dispatch(actions.fetchRequest());
      dispatch(actions.fetchSuccess(res.data));
    })
    .catch((err: {response:any}) => {     
      dispatch(actions.fetchError(err.response.data));
    });
}
