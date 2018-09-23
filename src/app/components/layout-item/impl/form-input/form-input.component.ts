import { Component, OnInit, Input } from '@angular/core';
import { LayoutItem } from '../../../../domain/layout-item';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input()
  source:LayoutItem;

  constructor() { }

  ngOnInit() {
  }

}
