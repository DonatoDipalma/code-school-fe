import { Component } from '@angular/core';
import { Teacher } from "src/model/dtos/teacher";
import { TeachersService } from "src/services/teachers/teachers.service";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {
  teachers: Teacher[] = [];
  favouriteTeacher: string = 'nessuno';
  
  constructor(private teacherService: TeachersService){}

  ngOnInit(){
      this.teacherService.getAllTeachers().subscribe({
          next: ts => {
              this.teachers = ts;
              console.log(this.teachers);
          },
          error: err => console.error("Errore", err)
      });
  }
}
