import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrfantastic',
  templateUrl: './mrfantastic.component.html',
  styleUrls: ['./mrfantastic.component.css']
})
export class MrfantasticComponent implements OnInit {
  values: String = '';
  valuesBox: String = '';
  valueBoxEnter: String = '';
  valueBoxEnterClick: String = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  onKeyBox(value: string) {
    this.valuesBox += value + ' | ';
  }

  onEnter(value: string) {
    this.valueBoxEnter = value;
  }

  onEnterClick(value: string) {
    this.valueBoxEnterClick = value;
  }

}
