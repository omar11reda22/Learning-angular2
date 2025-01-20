import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Students } from '../Models/student';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-update',
  imports: [FormsModule ,StudentComponent],
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent {
  // input data from another component

  // will send data after update to the student component
  // saveupdate(){

  // }

  @Input() student: Students | null = null;
 @Output() updateStudent = new EventEmitter<Students>();

  saveUpdate() {
    if (this.student) {
      this.updateStudent.emit(this.student);
    }}

}
