import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherFormData } from 'src/model/dtos/teacher-form';
import { TeachersService } from 'src/services/teachers/teachers.service';

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent implements OnInit{
  teacherForm !: FormGroup;

  teacherData: TeacherFormData = {
    firstname: '',
    lastname: '',
    fiscalCode: '',
    email: '',
    bio: '',
    begunTeaching: '',
    nickname: '',
    professionalExperience: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeachersService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.teacherForm = this.formBuilder.group({

      })
  }

  createNewTeacher() {
    alert("COMING SOON!");
  }
}
