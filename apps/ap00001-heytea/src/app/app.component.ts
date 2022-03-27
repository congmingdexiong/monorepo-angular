import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WOTB_ACTIONS } from './store/actions/action';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'monorepo-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ap00001-heytea';
  columnDefs: ColDef[] = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private store:Store){}
  ngOnInit(): void {
    this.store.dispatch(WOTB_ACTIONS.getAccounts())
  }
  
}
