import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Students } from '../Models/student';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  @Output()
  onStudentadded: EventEmitter<Students> = new EventEmitter<Students>();
  nstd: Students = new Students(0 , '' , 0);
  // will send data to the student component
  Save() {
    this.onStudentadded.emit(this.nstd);
  }
}
