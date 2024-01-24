import { Component } from '@angular/core';
import { Student } from 'src/model/dtos/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  student: Student[] = [];

  constructor(private studentService: StudentService){}

}