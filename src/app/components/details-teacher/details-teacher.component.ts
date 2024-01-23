import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/model/dtos/teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-details-teacher',
  templateUrl: './details-teacher.component.html',
  styleUrls: ['./details-teacher.component.css']
})
export class DetailsTeacherComponent {
  teacherDetails!: Teacher;
  teacherId!: number;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeachersService
  ) {}

  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params['teacherId']; 
    this.loadTeacherDetails();
  }

  loadTeacherDetails(){
    this.teacherService.getTeacherDetailsById(this.teacherId).subscribe({
      next: det => {
        this.teacherDetails = det;
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dei corsi:', err);
      }
  });
  }
}
