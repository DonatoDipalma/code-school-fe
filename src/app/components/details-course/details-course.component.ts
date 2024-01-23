import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/model/dtos/course';
import { CourseService } from 'src/services/courses/courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit{
  courseDetails!: Course;
  courseId!: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId']; 
    this.loadCourseDetails();
  }

  loadCourseDetails(){
    this.courseService.getCourseDetailsById(this.courseId).subscribe({
      next: edt => {
        this.courseDetails = edt;
      },
      error: err => {
        console.error('Errore nel recupero dei dettagli dei corsi:', err);
      }
  });
  }
}
