import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { Student } from 'src/model/dtos/student';
import { TeacherSummaryDto } from 'src/model/dtos/teachers-summary';
import { EditionService } from 'src/services/edition/edition.service';
import { StudentService } from 'src/services/student/student.service';
import { TeachersService } from 'src/services/teachers/teachers.service';


@Component({
  selector: 'app-card-student-details-edition',
  templateUrl: './card-student-details-edition.component.html',
  styleUrls: ['./card-student-details-edition.component.css']
})
export class CardStudentDetailsEditionComponent {
  @Input('student') students!: Student[];

  ngOnInit(): void {
   
  }
}  

