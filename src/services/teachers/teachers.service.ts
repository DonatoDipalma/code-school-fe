import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "src/model/dtos/teacher";
import { TeacherCompetenceDto } from "src/model/dtos/teacher-competence";
import { TeacherFormData } from "src/model/dtos/teacher-form";
import { TeacherSummaryDto } from "src/model/dtos/teachers-summary";
@Injectable({
    providedIn : "root"
})
export class TeachersService{
    URL = "http://localhost:8080/api/teacher";
    TEACHER_ASSIGNMENT_URL = "http://localhost:8080/api/edition-module"
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
        return this.http.get<Teacher[]>(`${this.URL}/three-teachers`, {params});
    } 

    findTeachersBySkill(skillId: number, level: string): Observable<TeacherCompetenceDto[]> {
        const params = new HttpParams()
            .set('skillId', skillId)
            .set('level', level);

        return this.http.get<TeacherCompetenceDto[]>(`${this.URL}/`, { params });
    }

    assignTeacherToModule(teacherId: number, moduleId: number): Observable<void> {
        return this.http.post<void>(`${this.TEACHER_ASSIGNMENT_URL}/${moduleId}/teacher`,
          { moduleId, teacherId });
      }      
    
    getAllTeachers(): Observable<Teacher[]>{
        return this.http.get<Teacher[]>(`${this.URL}/three-teachers`);
    }

    addNewTeacher(teacherData: TeacherFormData): Observable<any>{
        return this.http.post<any>(`${this.URL}/`, teacherData);
    }

    deleteTeacher(teacherId: number): Observable<void> {
        return this.http.delete<void>(`${this.URL}/${teacherId}`);
      }
}