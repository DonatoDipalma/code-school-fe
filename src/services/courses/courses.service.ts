import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from 'src/model/dtos/course';
import { CourseDetails } from 'src/model/dtos/course-details';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private URL = 'http://localhost:8080/api/course';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.URL}/`);
  }

  createCourse(courseData: Course): Observable<Course> {
    return this.http.post<Course>(`${this.URL}/`, courseData);
  }
  
  deleteCourse(courseId: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${courseId}`);
  }

  getCourseDetails(courseId: number): Observable<CourseDetails>{
    return this.http.get<CourseDetails>(`${this.URL}/${courseId}`);
  }

}
