import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'birdman',
  templateUrl: './birdman.component.html',
  styleUrls: ['./birdman.component.css'],
  providers:   [LoggerService]
})
export class BirdmanComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  getHeroes(): void {
    console.log(this.loggerService.getLogger());
  }

  ngOnInit() {
  }

}
