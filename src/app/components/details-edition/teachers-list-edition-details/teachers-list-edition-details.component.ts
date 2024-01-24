import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { Teacher } from 'src/model/dtos/teacher';

@Component({
  selector: 'app-teachers-list-edition-details',
  templateUrl: './teachers-list-edition-details.component.html',
  styleUrls: ['../details-edition.component.css']
})
export class TeachersListEditionDetailsComponent {
  @Input('teachersEmptyName') teachersEmpty : boolean = true;
  @Input('editionIdName') editionId! : number;
  @Input('editionDetailsName') editionDetails!: EditionDetailsDto;

  @Output('deleteTeacherName') deleteTeacherClicked : EventEmitter<{moduleId : number, teacherId : number}> = new EventEmitter<any>();

  deleteTeacherFun(moduleId : number, teacherId : number) : void {
    this.deleteTeacherClicked.emit({moduleId, teacherId});
  }
}
