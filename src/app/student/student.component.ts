import { Component } from '@angular/core';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { Students } from '../Models/student';
import 'bootstrap/dist/css/bootstrap.css';


@Component({
  selector: 'app-student',
  imports: [StudentAddComponent, StudentUpdateComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  students: Students[] = [
    new Students(1, 'omar reda', 23),
    new Students(2, 'ahmed', 24),
    new Students(3, 'mohamed', 25),
  ];
  Savep(s: Students) {
    this.students.push(new Students(s.id, s.Name, s.age));
  }
  showAddForm = false;
  showUpdateForm = false;

  showAdd() {
    const addDiv = document.getElementById('add');
    const updateDiv = document.getElementById('update');
    if (addDiv && updateDiv) {
      addDiv.style.display = 'block';
      updateDiv.style.display = 'none';
    }
  }

  selectedStudent: Students | null = null;

  showUpdate() {
    const addDiv = document.getElementById('add');
    const updateDiv = document.getElementById('update');
    if (addDiv && updateDiv) {
      addDiv.style.display = 'none';
      updateDiv.style.display = 'block';
    }
  }
  deleto(id: number) {
    // Remove the student from the array
    this.students = this.students.filter((student) => student.id !== id);
  }
}
