import { Component, OnInit } from '@angular/core';
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
export class CardStudentDetailsEditionComponent implements OnInit {
  editionId!: number;
  teachersEmpty = true;
  students!: Student[];

  constructor(
    private route: ActivatedRoute,
    private editionService: EditionService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.editionId = this.route.snapshot.params['editionId']; 
    this.loadEnrolledStudent();
  }

  loadEnrolledStudent(){
    this.studentService.getEnrolledStudentByEditionId(this.editionId).subscribe({
      next: edt => {
        this.students = edt;
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
      }
  });
  }

}  

