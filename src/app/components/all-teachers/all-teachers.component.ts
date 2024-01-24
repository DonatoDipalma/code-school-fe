import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/model/dtos/teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent {
  allTeacher: Teacher[] = [];

  constructor(private teacherService: TeachersService, private route: ActivatedRoute){}

  ngOnInit(){
      this.fetchAllTeachers();
  }

  fetchAllTeachers() {
      this.teacherService.getAllTeachers().subscribe({
          next: ts => {
              this.allTeacher = ts;
          },
          error: (error) => {
              console.error('Errore nel recupero dei teacher:', error);
          }
      });
  }

  deleteTeacher(teacherId: number) {
    this.teacherService.deleteTeacher(teacherId).subscribe({
        next: () => {
            this.fetchAllTeachers();
        },
        error: (error) => {
            console.error('Errore nell\'eliminazione del corso:', error);
        }
    });
}
}