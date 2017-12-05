import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-generate1',
  templateUrl: './generate1.component.html',
  styleUrls: ['./generate1.component.css']
})
export class Generate1Component implements OnInit {
  //randomNumber = Math.floor(Math.random()*10+1);
  numbers: number[] = [];
  randomNum: number; 
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

  generateOne(){
    this._dataService.addNumber(this.randomNum);
  }

}
