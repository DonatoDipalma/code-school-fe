import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddTeacher } from "src/model/dtos/add-teacher";
import { Teacher } from "src/model/dtos/teacher";
import { TeacherCompetenceDto } from "src/model/dtos/teacher-competence";
import { TeacherSummaryDto } from "src/model/dtos/teachers-summary";
@Injectable({
    providedIn : "root"
})
export class TeachersService{
    TEACHER_URL = "http://localhost:8080/api/teacher";
    TEACHER_ASSIGNMENT_URL = "http://localhost:8080/api/edition-module"
    TEACHER_BY_COMPETENCE_URL = "http://localhost:8080/api/competence/teacher"
    constructor(private http: HttpClient){
    }

    // getTopThreeTeachers(): Observable<Teacher[]>{
    //     const params = new HttpParams().set('limit', 3);
    //     //return this.http.get<Teacher[]>(URL + "/?limit=3");
    //     return this.http.get<Teacher[]>(this.URL, {params});
    // }

    getTopThreeTeachers(): Observable<Teacher[]> {
        const params = new HttpParams()
            .set('limit', 3);
        return this.http.get<Teacher[]>(`${this.TEACHER_URL}/`, { params } );
    }

    findTeachersBySkill(skillId: number, level: string): Observable<TeacherCompetenceDto[]> {
        const params = new HttpParams()
            .set('skillId', skillId)
            .set('level', level);

        return this.http.get<TeacherCompetenceDto[]>(`${this.TEACHER_BY_COMPETENCE_URL}/`, { params });
    }

    assignTeacherToModule(teacherId: number, moduleId: number): Observable<void> {
        return this.http.post<void>(`${this.TEACHER_ASSIGNMENT_URL}/${moduleId}/teacher`,
          { moduleId, teacherId });
      }   
    
    createTeacher(addTeacher: AddTeacher): Observable<void>{
        return this.http.post<void>(`${this.TEACHER_URL}/`, addTeacher);
    }
    getAllTeachers(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(`${this.TEACHER_URL}/`);
    }
    deleteTeacher(teacherId: number): Observable<void>{
        return this.http.delete<void>(`${this.TEACHER_URL}/${teacherId}`);
    }
}