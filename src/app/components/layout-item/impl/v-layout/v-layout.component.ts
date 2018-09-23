import { Component, OnInit, Input } from '@angular/core';
import { LayoutItem } from '../../../../domain/layout-item';

@Component({
  selector: 'v-layout',
  templateUrl: './v-layout.component.html',
  styleUrls: ['./v-layout.component.scss']
})
export class VLayoutComponent implements OnInit {

  @Input()
  source: LayoutItem;

  constructor() { }

  ngOnInit() {
  }

}
