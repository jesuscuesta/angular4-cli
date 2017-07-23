import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }  from '@angular/common';

@Component({
  selector: 'shazzam',
  templateUrl: './shazzam.component.html',
  styleUrls: ['./shazzam.component.css']
})
export class ShazzamComponent implements OnInit {

   constructor(private route: ActivatedRoute, private location: Location) {}

  goBack(): void{
  	this.location.back();
  }

  ngOnInit() {
  }

}
