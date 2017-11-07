import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford','Suzuki',"Lambo"];

  myData(){
    return 'This is my data';
  }

  getMyArray(){
    return this.cars ; 
  }

}
