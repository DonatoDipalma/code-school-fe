import { Component, OnInit } from "@angular/core";
import { Course } from "src/model/dtos/course";
import { CourseService } from "src/services/courses/courses.service";

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
    allCourses: Course[] = [];

    constructor(private courseService: CourseService){}

    ngOnInit(){
        this.fetchAllCourses();
    }

    fetchAllCourses() {
        this.courseService.getAllCourses().subscribe({
            next: cs => {
                this.allCourses = cs;
                console.log(this.allCourses);
            },
            error: (error) => {
                console.error('Errore nel recupero dei corsi:', error);
            }
        });
    }
}
