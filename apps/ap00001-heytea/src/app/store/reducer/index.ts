import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../../app.state";
import { accountReducer } from "./account.reducer";

export const wotbReducers:ActionReducerMap<AppState> = {
    Accounts:accountReducer,
    // WOTBAccount:currentAccountReducer,
}