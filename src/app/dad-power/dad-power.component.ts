import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'steven-dad-power',
  templateUrl: './dad-power.component.html',
  styleUrls: ['./dad-power.component.scss']
})
export class DadPowerComponent implements OnInit {

  // @Input('state')
  // set state(state: string) {
  //   console.debug('steven-dad-power recieved state:', state);
  // }

  // @Output() message = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
