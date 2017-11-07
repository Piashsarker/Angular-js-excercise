import { Component } from '@angular/core';
// Import all others files to work
import {EventComponentComponent} from './event-component/event-component.component';
import { DataService} from './data.service';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';

// Componen decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private dataService: DataService){

  }

  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData()+": "+this.dataService.getMyArray();
  }

  someProperty:any='';



}
