import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/model/dtos/course';
import { CourseService } from 'src/services/courses/courses.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})


export class DetailCourseComponent implements OnInit{
  courseDetails!: Course;
  courseId!: number;

  constructor(private route:ActivatedRoute,
              private courseService:CourseService,        
    ){}
    
    
    ngOnInit(): void {
    this.courseId=this.route.snapshot.params['courseID'];
  }
;



}
