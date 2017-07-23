import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'superman',
  templateUrl: './superman.component.html',
  styleUrls: ['./superman.component.css']
})
export class SupermanComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public nombre = 'Superman';

  public verPoderes(){
  	console.log('Superfueza, velocidad, rayos laser');
  }

}
