import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { LayoutItem } from '../../domain/layout-item';

@Component({
  selector: 'drop-handle',
  templateUrl: './drop-handle.component.html',
  styleUrls: ['./drop-handle.component.scss']
})
export class DropHandleComponent implements OnInit {

  constructor() { }

  @Input()
  item: LayoutItem;

  @Input()
  before: boolean = true;

  @Input()
  orientation: string;

  @HostBinding("class.vertical")
  get vertical(): boolean { return this.orientation === 'vertical' }

  @HostBinding("class.horizontal")
  get horizontal(): boolean { return this.orientation === 'horizontal' }

  @HostBinding("class.visible")
  visible: boolean = false;

  @HostBinding("attr.droppable")
  allowDrop: boolean = true;

  @HostListener('dragover',['$event'])
  onDragOver(e) {
    this.visible = true;
    e.preventDefault();
  }

  @HostListener('dragleave')
  onDragOut() {
    this.visible = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(e) {
    this.visible = false;
    // e.preventDefault();
  }

  ngOnInit() {

  }

}
