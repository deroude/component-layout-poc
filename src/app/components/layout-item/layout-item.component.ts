import { Component, OnInit, Input } from '@angular/core';
import { LayoutItem } from '../../domain/layout-item';

@Component({
  selector: 'layout-item',
  templateUrl: './layout-item.component.html',
  styleUrls: ['./layout-item.component.scss']
})
export class LayoutItemComponent implements OnInit {

  @Input()
  source:LayoutItem;

  constructor() { }

  ngOnInit() {
  }

}
