import { Component, OnInit } from '@angular/core';

import {trigger,state, style , transition ,animate,keyframes} from '@angular/animations';

// Componen decorator
@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small',style({
        transform: 'scale(1)',
      })),
      state('large',style({
        transform: 'scale(1.2)',
      })),
        transition('small=> large' ,animate('300ms ease-in',style(
          {
            transform : 'translateY(40px)'
          }
        )))
    ]),


  ]
})
export class MyNewComponentComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

    //animation control

    state: string = 'small';

    // paragraph class binding

    paragraph = 'paragraph-animate';

    animateMe(){
      this.state = (this.state=== 'small'?'large':'small');
    }



  // Object
     myObject ={
      gender : 'male',
      age: 22,
      location : 'USA'
    }
  // array
    myArr = ['Piash', 'Masud', 'Anjan'];

    //boolean
    isFound = true ;
    //logoURL
    angularLogo ='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg';
    // button control
    buttonStatus = 'enabled';


}
