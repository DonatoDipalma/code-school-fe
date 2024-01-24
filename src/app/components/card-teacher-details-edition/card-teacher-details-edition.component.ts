import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';

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

