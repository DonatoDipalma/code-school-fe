import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { TeacherAssignmentDto } from 'src/model/dtos/teacher-assignment';
import { EditionService } from 'src/services/edition/edition.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-module',
  templateUrl: './teacher-module.component.html',
  styleUrls: ['./teacher-module.component.css']
})
export class TeacherModuleComponent implements OnInit{
  @Input('teachers') teachers!: TeacherAssignmentDto;

  constructor(
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private editionService: EditionService
  ) {}

  ngOnInit(): void {
    
  }

  

  // loadEditionDetails(){
  //   this.editionService.getEditionDetailsById(this.editionId).subscribe({
  //     next: edt => {
  //       this.editionDetails = edt;
  //       console.log(this.editionDetails);
  //     },
  //     error: err => {
  //       console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
  //     }
  // });
  // }

  deleteTeacher(idEditionModule: number, idTeacher: number){
    this.editionService.deleteTeacherByTeacherIdAndEditionModuleId(idTeacher, idEditionModule).subscribe({
      next:(em => {
        alert("Docenza annullata");
        // this.loadEditionDetails();
      }),
      error: err => {
        alert("Errore " + err);
        console.log(err);
      }
    });
  }
}
