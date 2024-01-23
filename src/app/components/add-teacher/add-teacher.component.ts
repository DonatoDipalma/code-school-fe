import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teachers } from '../teachers/teachers.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AddTeacher } from 'src/model/dtos/add-teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit{
    teacherForm!: FormGroup; // Il ! non è necessario inizializzarlo subito
    
    teacherData: AddTeacher = {
      id: 0,
      firstname: '',
      lastname: '',
      fiscalCode: '',
      email: ''
    }
  teachersService: any;

    
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private teacherService: TeachersService
    ) {}
  
    ngOnInit(): void {
      const teacherId = this.route.snapshot.queryParams['teacherId']; 
      this.teacherForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        fiscalCode: ['', Validators.required],
        email: ['', Validators.required]
      });

      
    }

    createNewTeacher() {
      if(this.teacherForm.valid){
        this.teacherData = {...this.teacherForm.value};
        this.teacherService.createTeacher(this.teacherData).subscribe({
          next: () => {
            this.router.navigate(["success-add-teacher-form"]);
          },
          error: (error: any) => {
            console.error(error);
          }
        })
      }
  }

}

