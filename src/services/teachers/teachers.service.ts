import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "src/model/dtos/teacher";
import { TeacherCompetenceDto } from "src/model/dtos/teacher-competence";
import { TeacherSummaryDto } from "src/model/dtos/teachers-summary";
@Injectable({
    providedIn : "root"
})
export class TeachersService{
    URL = "http://localhost:8080/api/teacher"
    constructor(private http: HttpClient){
    }

    // getTopThreeTeachers(): Observable<Teacher[]>{
    //     const params = new HttpParams().set('limit', 3);
    //     //return this.http.get<Teacher[]>(URL + "/?limit=3");
    //     return this.http.get<Teacher[]>(this.URL, {params});
    // }

    getTopThreeTeachers(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(`${this.URL}/`);
    }

    // findTeachersBySkill(skillId: number, level: string): Observable<TeacherCompetenceDto[]>{
    // }
}