import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wonderwoman',
  templateUrl: './wonderwoman.component.html',
  styleUrls: ['./wonderwoman.component.css']
})
export class WonderwomanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public nombre = 'Wonderwoman';
  public poderes = 'Superfueza';

}
