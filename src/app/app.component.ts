import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StudentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
/*
will passing data from component to my front (template)
using 3 way => [attr.] [attribute] = "" - string interplution 
event 

*/
export class AppComponent {
  title = 'Testone';
  lol = 'test lol';
  status = true;
  age = Math.random();
  change() {
    this.age++;
  }
  change2() {
    this.age--;
  }
  changestatus() {
    this.status = !this.status;
  }
}
