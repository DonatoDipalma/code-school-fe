import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { TeacherSummaryDto } from 'src/model/dtos/teachers-summary';
import { EditionService } from 'src/services/edition/edition.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-details-edition',
  templateUrl: './details-edition.component.html',
  styleUrls: ['./details-edition.component.css']
})
export class DetailsEditionComponent implements OnInit {

  editionDetails!: EditionDetailsDto;
  teachersEmpty = true;

  constructor(
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private editionService: EditionService
  ) {}

  ngOnInit(): void {
    const editionId = this.route.snapshot.params['editionId'];
    
    this.editionService.getEditionDetailsById(editionId).subscribe({
      next: edt => {
        this.editionDetails = edt;
        console.log(this.editionDetails);
        
        for(let i = 0; i < this.editionDetails.teachers.length; i++){
          //this.teachersEmpty = this.teachersEmpty && this.editionDetails.teachers[i] === null
        }
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
      }
  });
  }

  deleteTeacher(idEditionModule: number, idTeacher: number){
    this.editionService.deleteTeacherByTeacherIdAndEditionModuleId(idTeacher, idEditionModule).subscribe({
      next:(em => {
        alert("Insegnante/i eliminato/i");
        this.editionDetails.teachers = this.editionDetails.teachers.filter(
          teacherAssignment => 
            teacherAssignment.teacherSummary.id   != idTeacher
            || teacherAssignment.moduleId  != idEditionModule
          );
      })
    });
  }
}  