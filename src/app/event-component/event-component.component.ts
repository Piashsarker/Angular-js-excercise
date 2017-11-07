import { Component, OnInit } from '@angular/core';

// Componen decorator
@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  //declearing class for css styling , class binding
  classBindingClass = 'class-binding';

//Multiple class binding for css . Make one false to see the effect . 
  multipleStyleClass = {
    'text-style' : true ,
    'box-style' : true
  }



  constructor() {
   }

  ngOnInit() {
  }
  clickEvent(ev){
    console.log('Click Event Working.');
    console.log( ev);
  }

  mouseEnterEvent(event){
    console.log('Mouse Enter event triggred');
  }
}
