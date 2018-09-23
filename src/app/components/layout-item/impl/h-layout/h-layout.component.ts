import { Component, OnInit, Input } from '@angular/core';
import { LayoutItem } from '../../../../domain/layout-item';

@Component({
  selector: 'h-layout',
  templateUrl: './h-layout.component.html',
  styleUrls: ['./h-layout.component.scss']
})
export class HLayoutComponent implements OnInit {

  @Input()
  source:LayoutItem;

  constructor() { }

  ngOnInit() {
  }

}
