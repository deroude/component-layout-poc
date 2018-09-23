import { Component, OnInit, Input } from '@angular/core';
import { LayoutItem } from '../../domain/layout-item';

@Component({
  selector: 'layout-item',
  templateUrl: './layout-item.component.html',
  styleUrls: ['./layout-item.component.scss']
})
export class LayoutItemComponent implements OnInit {

  @Input()
  source: LayoutItem;

  target: any;

  constructor() { }

  ngOnInit() {
  }

  checkHandle(e: any): void {
    this.target = e.target;
  }

  dragStart(e: any): void {
    if(this.target.className==='drag-handle'){

    }else{
      e.preventDefault();
    }
  }

}
