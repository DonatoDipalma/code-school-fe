import { Component } from '@angular/core';
import { Teacher } from 'src/model/dtos/teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {

  teachers: Teacher[] = [];
  favoriteTeachers: string = 'nessuno';
  
  constructor ( private teacherService: TeachersService){}

  ngOnInit(){
    this.teacherService.getAllTeachers().subscribe({
      next: ts => {
        this.teachers = ts;
        console.log(this.teachers);
    },
    error: err => console.error("Errore", err)
    });
  }
  
  fetchAllTeacher() {
    this.teacherService.getAllTeachers().subscribe({
        next: cs => {
            this.teachers = cs;
        },
        error: (error) => {
            console.error('Errore nel recupero dei teacher:', error);
        }
    });
  }

  deleteTeacher(teacherId: number) {
    this.teacherService.deleteTeacher(teacherId).subscribe({
        next: () => {
            this.fetchAllTeacher();
        },
        error: (err) => {
          console.error(err);
        }
    });
  }
  
}
