import { Component } from '@angular/core';
import { Teacher } from 'src/model/dtos/teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent {
  allTeacher: Teacher[] = [];

  constructor(private teacherService: TeachersService){}

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
  // deleteCourse(courseId: number) {
  //     this.courseService.deleteCourse(courseId).subscribe({
  //         next: () => {
  //             this.fetchAllCourses();
  //         },
  //         error: (error) => {
  //             console.error('Errore nell\'eliminazione del corso:', error);
  //         }
  //     });
  // }
}