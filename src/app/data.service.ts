import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [];
  numbers2: number[] = [];
  randomNum: number; 
  sum: number; 
  constructor() { }

  retrieveNumbers(): number[]{
    return this.numbers;
  }

  retrieveNumbers2(): number[]{
    return this.numbers2;
  }

  addNumber(randomNum: number){
    this.randomNum = Math.floor(Math.random()*10);
    this.numbers.push(this.randomNum);
  }

  addNumber2(randomNum: number){
  this.randomNum = Math.floor(Math.random()*10);
  this.numbers2.push(this.randomNum);
  }

//getting sum1 and sum2 
  getSum1(){
    this.sum = 0; 
    for (var i= 0; i < this.numbers.length; i++){
      this.sum = this.sum + this.numbers[i];
    }
    console.log("----Sum1");
    return this.sum; 
  }

  getSum2(){
    this.sum = 0; 
    for (var i= 0; i < this.numbers2.length; i++){
      this.sum = this.sum + this.numbers2[i];
    }
    console.log("----Sum2");
    return this.sum; 
  }

  //substructing====== sum1 - sum2 
  sustructSum(){
    return (this.getSum1()-this.getSum2());
  }


}
