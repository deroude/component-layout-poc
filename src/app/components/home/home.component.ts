import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Go } from '../../redux/router/router.actions';
import { AppState } from '../../redux/reducers';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
