import { Component, Input } from '@angular/core';
import { Student } from 'src/model/dtos/student';

@Component({
  selector: 'app-enrolled-students',
  templateUrl: './enrolled-students.component.html',
  styleUrls: ['./enrolled-students.component.css']
})
export class EnrolledStudentsComponent {
  @Input('studentsList') students : Student[] = [];
}
