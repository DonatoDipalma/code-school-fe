import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { Student } from 'src/model/dtos/student';
import { TeacherSummaryDto } from 'src/model/dtos/teachers-summary';
import { EditionService } from 'src/services/edition/edition.service';
import { StudentService } from 'src/services/student/student.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-card-teacher-details-edition',
  templateUrl: './card-teacher-details-edition.component.html',
  styleUrls: ['./card-teacher-details-edition.component.css']
})
export class CardTeacherDetailsEditionComponent implements OnInit {
  @Input('teacherDetails') editionDetails!: EditionDetailsDto;
  @Input('editionId') editionId!: number;
  @Output('deleteTeacher') deleteTeacher = new EventEmitter<{ idEditionModule: number, idTeacher: number }>();

  teachersEmpty = true;

  ngOnInit(): void {
  }

  onDeleteTeacher(idEditionModule: number, idTeacher: number) {
    this.deleteTeacher.emit({ idEditionModule, idTeacher });
  }
}

