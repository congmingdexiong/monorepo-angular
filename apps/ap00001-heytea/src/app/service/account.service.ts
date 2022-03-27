import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../domain/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts():Observable<Account[]>{
    let account:Account = {
      accNum:'1',
      isDefaultAcc:true,
      name:'aleng',
      isRetirement:false,
      spreadsAllowInd:false,
      optionLevel:'1'
    }
    return of([account])
  }
}
