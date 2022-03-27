import { initalAccountState } from "./store/reducer/account.reducer";

export interface AppState{
    // readonly Quotes:QuoteState,
}

export const initialAppState:AppState={
    // WOTBAccount:initialAccountsState,
    Accounts:initalAccountState
}