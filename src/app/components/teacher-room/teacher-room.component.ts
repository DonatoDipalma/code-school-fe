import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from 'src/services/teachers/teachers.service';
import { Teachers } from '../teachers/teachers.component';
import { Teacher } from 'src/model/dtos/teacher';

@Component({
  selector: 'app-teacher-room',
  templateUrl: './teacher-room.component.html',
  styleUrls: ['./teacher-room.component.css']
})
  export class TeacherRoomComponent implements OnInit {
  teacherForm!: FormGroup;
  levels: String[] = ["Senior","Standard","Junior"];
  teachers: Teacher[] = [];
  allTeachers: Teacher[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teacherService: TeachersService
  ) {}


  ngOnInit(): void {
    this.getAllTeacher();

    this.teacherForm = this.formBuilder.group({
      teacherLevel: [null]
    });
  }
  getAllTeacher(){
    this.teacherService.getAllTeachers().subscribe({
      next: ts => {
        this.teachers = ts;
        this.allTeachers = ts;
      },
      error: (error) =>  console.error('Errore nel recupero degli insegnanti:', error)
    });
  }


  filterLevel(){
    const selectedLevel = this.teacherForm.get('teacherLevel')?.value;
    if(selectedLevel === "null"){
      this.teachers = this.allTeachers;
    } else {
      this.teachers = this.allTeachers.filter(teacher => teacher.teacherLevel === selectedLevel);
    }
  }

  deleteTeacher(teacherId: number){
    this.teacherService.deleteTeacher(teacherId).subscribe({
      next: () => this.getAllTeacher(),
      error: (error) =>  console.error("Errore nell' eliminazione dell' insegnante:", error)
    });
  }
}
  






