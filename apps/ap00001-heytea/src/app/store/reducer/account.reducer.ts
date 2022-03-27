
import {createReducer,on} from '@ngrx/store';
import { Account } from '../../domain/account.model';
import { WOTB_ACTIONS } from "../actions/action";

export type AccountState = Account[];

export const initalAccountState:AccountState = [];

export const accountReducer = createReducer<AccountState>(
    initalAccountState,
    on(WOTB_ACTIONS.getAccountsSuccess,(state,{accounts}):AccountState=>[...accounts])
)