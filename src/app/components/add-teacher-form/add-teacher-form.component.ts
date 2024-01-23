import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/model/dtos/teacher';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent {
  teacherForm!: FormGroup;
  
  teacherData: Teacher = {
    id: 0,
    firstname: '',
    lastname: '',
    bio: '',
    begunTeaching: '',
    nickname: '',
    professionalExperience: '',
    teacherLevel: '',
    imgName: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeachersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      bio: ['', Validators.required],
      begunTeaching: ['', Validators.required],
      nickname: ['', Validators.required],
      imgName:['', Validators.required],
      professionalExperience: ['', Validators.required],
      teacherLevel: ['', Validators.required]
    });
  }

  createNewTeacher() {
    if (this.teacherForm.valid) {
      this.teacherData = { ...this.teacherForm.value };
      this.teacherService.createTeacher(this.teacherData).subscribe({
        next: ts => {
          this.router.navigate(['/success-add-teacher-form']);
        },
        error: error => {
          console.error('Errore durante la creazione del corso:', error);
        }
      });
      
    } else {
      console.error('Form non valido.');
    }
  }
}


