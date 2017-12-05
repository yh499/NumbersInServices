import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-generate3',
  templateUrl: './generate3.component.html',
  styleUrls: ['./generate3.component.css']
})
export class Generate3Component implements OnInit {

  result: number; 

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

//function for sum1-sum2 
  substructNum(){
    this.result = this._dataService.sustructSum();
  }

}
