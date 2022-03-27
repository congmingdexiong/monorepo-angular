import { createFeatureSelector, createSelector } from "@ngrx/store";
import { isEmpty } from "lodash";
import { AccountGroup } from "../../domain/account.model";
import { AccountState } from "../reducer/account.reducer";


export const selectAccountState 
    = createFeatureSelector<AccountState>('Accounts');


export const selectAccountGroup = createSelector(selectAccountState,
    (state:AccountState) =>state.reduce(
        (previous,current)=>{
            console.log('current',current)
            return previous;
        },
        [] as AccountGroup[]
    ).filter(accountGroups=>!isEmpty(accountGroups))
    .sort((a,b)=>a.groupName.localeCompare(b.groupName))
    
    
    // (state:AccountState) =>{return state}
    
)