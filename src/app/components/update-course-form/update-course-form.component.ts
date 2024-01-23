import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/model/dtos/area';
import { CompetenceService } from 'src/services/area/competence.service';
import { CourseService } from 'src/services/courses/courses.service';
@Component({
  selector: 'app-update-course-form',
  templateUrl: './update-course-form.component.html',
  styleUrls: ['./update-course-form.component.css']
})
export class UpdateCourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  courseId: number;
  areas: Area[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private coursesService: CourseService,
    private areaService: CompetenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.courseId = +this.route.snapshot.params['courseId'];
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      maxPartecipant: ['', Validators.required],
      payment: ['', Validators.required],
      skillLevel: ['', Validators.required],
      areaId: ['', Validators.required]
    });
    this.areaService.getAllAreas().subscribe({
      next: areas => {
        this.areas = areas;
      },
      error: error => {
        console.error('Errore durante il recupero delle aree:', error);
      }
    });

    this.coursesService.getCourseDetailsById(this.courseId).subscribe(
      (course) => {
        this.courseForm.patchValue({
          title: course.title,
          duration: course.duration,
          maxPartecipant: course.maxPartecipant,
          payment: course.payment,
          skillLevel: course.skillLevel,
          areaId: course.areaId
        });
      },
      (error) => {
        console.error('Errore durante il recupero dei dettagli del corso');
      }
    );
  }

  updateCourse(): void {
    if (this.courseForm.valid) {
      const updatedCourseData = { ...this.courseForm.value, id: this.courseId };
  
      this.coursesService.updateCourse(this.courseId, updatedCourseData).subscribe({
        next: () => this.router.navigate(['/courses']),
        error: (error: any) => console.error('Errore durante l\'aggiornamento del corso:', error?.message || 'Errore sconosciuto')
      });
    } else {
      console.error('Form non valido.');
    }
  }
  
}
