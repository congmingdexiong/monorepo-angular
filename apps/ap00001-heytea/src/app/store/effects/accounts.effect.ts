import { WOTB_ACTIONS } from "../actions/action";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { isArray } from "lodash";
import { Injectable } from "@angular/core";
import { AccountService } from "../../service/account.service";

@Injectable()
export class AccountEffect {
    constructor(
        private actions$:Actions,
        private accountService:AccountService
    ){}

    loadAccounts$ = createEffect(()=>{
        const accountEffect = this.actions$.pipe(
            ofType(WOTB_ACTIONS.getAccounts),
            mergeMap(
                ()=>this.accountService.getAccounts().pipe(
                    filter(isArray),
                    map((accounts)=>WOTB_ACTIONS.getAccountsSuccess({accounts})),
                    catchError(() =>[WOTB_ACTIONS.getAccountsFailed()])
                )
            )
        );
        return accountEffect;
    })
}