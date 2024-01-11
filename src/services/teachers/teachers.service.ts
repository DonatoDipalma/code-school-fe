import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Teacher } from "src/model/dtos/teacher";
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
        return this.http.get<Teacher[]>(this.URL);
    }

    getTeacherById(id: number): Observable<TeacherSummaryDto> {
        return this.http.get<TeacherSummaryDto>(`${this.URL}/${id}`);
      }
}