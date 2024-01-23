import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetails } from 'src/model/dtos/course-details';
import { CourseService } from 'src/services/courses/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
 
  courseDetails!: CourseDetails;
  courseId!: number;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute){}
  
  loadCourseDetails(){
    this.courseService.getCourseDetails(this.courseId).subscribe({
      next: cd => this.courseDetails = cd
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    this.loadCourseDetails();
  }
}
