import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/services/courses/courses.service';
import { Course } from 'src/model/dtos/course';
import { Area } from 'src/model/dtos/area';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  areas: Area[] = [
    { id: 1, name: 'Area 1' },
    { id: 2, name: 'Area 2' },
    { id: 3, name: 'Area 3' },
  ];
  
  courseData: Course = {
    title: '',
    duration: 0,
    maxParticipants: 0,
    areaId: '',
    courseType: '',
    payment: '',
    skillLevel: ''
  };
  courseCreatedSuccessfully: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      duration: [0, Validators.required],
      maxParticipants: [0, Validators.required],
      areaId: ['', Validators.required],
      courseType: ['', Validators.required],
      payment: ['', Validators.required],
      skillLevel: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.courseForm.valid) {
      this.courseData = { ...this.courseForm.value };
      this.courseService.createCourse(this.courseData).subscribe({
        next: cs => {
          this.router.navigate(['/success-add-course-form']);
        },
        error: error => {
          console.error('Errore durante la creazione del corso:', error);
        }
      })
      
    } else {
      console.error('Form non valido.');
    }
  }
}
