import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherFormData } from 'src/model/dtos/teacher-form';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent implements OnInit{

  teacherForm!: FormGroup;

  teacherData: TeacherFormData= {
    firstname: '',
    lastname: '',
    bio: '',
    nickname: '',
    professionalExperience: '',
    begunTeaching: new Date(),
    fiscalCode: '',
    email: '',
  }

  constructor(private formBuilder: FormBuilder,
              private teacherService: TeachersService,
              private router: Router,
              ){}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      bio: ['', Validators.required],
      nickname: ['', Validators.required],
      professionalExperience: ['', Validators.required],
      begunTeaching: ['', Validators.required],
      fiscalCode: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
  createNewTeacher(){
    if(this.teacherForm.valid){
      this.teacherData = {...this.teacherForm.value};
      this.teacherService.addNewTeacher(this.teacherData).subscribe({        
        next: t => {
          this.router.navigate(['/success-add-course-form']);
        },
        error: err => {
          console.error(err)
        }
      })
    }
  }

}
