import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { EventComponentComponent } from './event-component/event-component.component';

// import the service to work
import { DataService } from './data.service';
// for animation
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    EventComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  // Add the DataService provider
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
