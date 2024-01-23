import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model/dtos/course';
import { CourseService } from 'src/services/courses/courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {
  
  courseDetails!: Course;
  courseId!: number;
  
  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private courseService: CourseService){}
  
  
  
  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['courseId'];
    this.loadCourseDetails();
  }

  loadCourseDetails(){
    this.courseService.getCourseDetails(this.courseId).subscribe({
      next: c => {
        this.courseDetails = c;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
