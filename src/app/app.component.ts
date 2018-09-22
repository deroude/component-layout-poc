import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './redux/reducers';
import { LayoutItem } from './domain/layout-item';
import { SetLayoutAction } from './redux/layout/layout.actions';

const layout: LayoutItem = {
  id: 'root',
  type: 'v-layout',
  children: [
    {
      id: 'row-0',
      type: 'h-layout',
      children: [
        {
          id: 'form-input-0',
          type: 'form-input'
        },
        {
          id: 'form-input-1',
          type: 'form-input'
        }
      ]
    },
    {
      id: 'row-1',
      type: 'h-layout',
      children: [
        {
          id: 'form-input-2',
          type: 'form-input'
        },
        {
          id: 'form-input-3',
          type: 'form-input'
        }
      ]
    }
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new SetLayoutAction(layout));
  }

  title = 'app';
}
