import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WOTB_ACTIONS } from './store/actions/action';

@Component({
  selector: 'monorepo-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ap00001-heytea';
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(WOTB_ACTIONS.getAccounts())
  }
  
}
