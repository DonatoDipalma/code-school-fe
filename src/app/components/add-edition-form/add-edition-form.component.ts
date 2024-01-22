import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEdition } from 'src/model/dtos/add-edition';
import { Course } from 'src/model/dtos/course';
import { Edition } from 'src/model/dtos/edition';
import { CourseService } from 'src/services/courses/courses.service';
import { EditionService } from 'src/services/edition/edition.service';

@Component({
  selector: 'app-add-edition-form',
  templateUrl: './add-edition-form.component.html',
  styleUrls: ['./add-edition-form.component.css']
})

  export class AddEditionFormComponent implements OnInit {
    editionForm!: FormGroup; // Il ! non è necessario inizializzarlo subito
    courses: Course[] = [];
    
    editionData: AddEdition = {
      idCourse: 0,
      idRoom: 1,
      startDate: new Date(),
      finishDate: new Date(),
      tutor: '',
      pay: ''
    }
    
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private courseService: CourseService,
      private editionService: EditionService
    ) {}
  
    ngOnInit(): void {
      this.buildFullForm();
    }

    buildFullForm() {
      this.getAllCourses();
      this.editionForm = this.formBuilder.group({
        idCourse: ['', Validators.required],
        idRoom: [1],
        startDate: ['', Validators.required],
        finishDate: ['', Validators.required],
        tutor: ['', Validators.required],
        pay: ['', Validators.required]
      });
    }

    getAllCourses(){
      this.courseService.getAllCourses().subscribe({
        next: c => this.courses = c
      })
    }

    createNewEdition() {
      if(this.editionForm.valid){
        this.editionData = {...this.editionForm.value};
        this.editionService.createEdition(this.editionData).subscribe({
          next: ed => {
            this.router.navigate(["success-add-edition-form"]);
          },
          error: error => {
            console.error(error);
          }
        })
      }
  }

}
