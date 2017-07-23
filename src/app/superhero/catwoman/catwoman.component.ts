import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'catwoman',
  templateUrl: './catwoman.component.html',
  styleUrls: ['./catwoman.component.css'],
  providers:   [LoggerService]
})
export class CatwomanComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  profile = {};

  getEnem() {
    this.loggerService.getEnemigos().subscribe(data => this.profile = data);
  }

  ngOnInit() {
  }

}
