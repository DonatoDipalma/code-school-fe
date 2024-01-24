import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { Student } from 'src/model/dtos/student';
import { EditionService } from 'src/services/edition/edition.service';
import { StudentsService } from 'src/services/students/students.service';
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
  students: Student[] = [];
  constructor(
    private route: ActivatedRoute,
    private teachersService: TeachersService,
    private editionService: EditionService,
    private studentService : StudentsService
  ) {}

  ngOnInit(): void {
    this.editionId = this.route.snapshot.params['editionId']; 
    this.loadEditionDetails();
    this.loadStudentList();
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
  loadStudentList(){
    this.editionId = this.route.snapshot.params['editionId'];
    this.studentService.getAllStudentsOfEdition(this.editionId).subscribe({
        next: ts => {
            this.students = ts;
            console.log(this.students);
        },
        error: err => console.error("Errore", err)
    });
  }

  deleteTeacher(data : {moduleId : number, teacherId: number}){
    this.editionService.deleteTeacherByTeacherIdAndEditionModuleId(data.teacherId, data.moduleId).subscribe({
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
}  