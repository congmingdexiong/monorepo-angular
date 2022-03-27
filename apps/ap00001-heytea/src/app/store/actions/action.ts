import { createAction, props } from "@ngrx/store";
import { Account } from "../../domain/account.model";

const onInitSharedEffects = createAction('[Shared Effects] on Init Effects'),


//accounts actions
getAccounts = createAction('[Accounts] Get Accounts'),
getAccountsSuccess  = createAction('[Accounts] Get Accounts success',props<{accounts:Account[]}>()),
getAccountsFailed  = createAction('[Accounts] Get Accounts failed'),
selectAccount = createAction('[Account] selected account',props<{selectAccount:Account}>())



export const WOTB_ACTIONS = {
    getAccounts,
    getAccountsSuccess,
    getAccountsFailed,
    selectAccount
}