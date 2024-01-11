import { Component, OnInit } from "@angular/core";
import { Teacher } from "src/model/dtos/teacher";
import { TeachersService } from "src/services/teachers/teachers.service";

@Component({
    selector: 'app-teachers',
    templateUrl: './teachers.component.html',
    styleUrls: ['./teachers.component.css']
})
export class Teachers implements OnInit{
    teachers: Teacher[] = [];
    favouriteTeacher: string = 'nessuno';
    
    constructor(private teacherService: TeachersService){}

    ngOnInit(){
        this.teacherService.getTopThreeTeachers().subscribe({
            next: ts => {
                this.teachers = ts;
                console.log(this.teachers);
            },
            error: err => console.error("Errore")
        });
    }

    receiveTeacher(name: string): void {
        this.favouriteTeacher = name;
    }

}