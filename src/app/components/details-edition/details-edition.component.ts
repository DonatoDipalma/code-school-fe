import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { Student } from 'src/model/dtos/student';
import { TeacherSummaryDto } from 'src/model/dtos/teachers-summary';
import { EditionService } from 'src/services/edition/edition.service';
import { StudentService } from 'src/services/student/student.service';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-details-edition',
  templateUrl: './details-edition.component.html',
  styleUrls: ['./details-edition.component.css']
})
export class DetailsEditionComponent implements OnInit {

  editionDetails!: EditionDetailsDto;
  teachersEmpty = true;
  editionId!: number;
  students!: Student[];

  constructor(
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private editionService: EditionService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.editionId = this.route.snapshot.params['editionId']; 
    this.loadEditionDetails();
    this.loadEnrolledStudent();
  }

  loadEditionDetails(){
    this.editionService.getEditionDetailsById(this.editionId).subscribe({
      next: edt => {
        this.editionDetails = edt;
        console.log(this.editionDetails);
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
      }
  });
  }

  deleteTeacher(idEditionModule: number, idTeacher: number){
    this.editionService.deleteTeacherByTeacherIdAndEditionModuleId(idTeacher, idEditionModule).subscribe({
      next:(em => {
        alert("Docenza annullata");
        this.loadEditionDetails();
      }),
      error: err => {
        alert("Errore " + err);
        console.log(err);
      }
    });
  }
  loadEnrolledStudent(){
    this.studentService.getEnrolledStudentByEditionId(this.editionId).subscribe({
      next: edt => {
        this.students = edt;
        console.log(this.editionDetails);
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
      }
  });
  }

}  