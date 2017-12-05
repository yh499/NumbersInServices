import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-generate2',
  templateUrl: './generate2.component.html',
  styleUrls: ['./generate2.component.css']
})
export class Generate2Component implements OnInit {
  numbers2: number[] = [];
  randomNum: number; 
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers2 = this._dataService.retrieveNumbers2();
  }

  generateTwo(){
    this._dataService.addNumber2(this.randomNum);
  }

}
