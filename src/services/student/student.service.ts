import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "src/model/dtos/student";

@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
    private URL = 'http://localhost:8080/api/student';
  
    constructor(private http: HttpClient) { }

    getEnrolledStudentByEditionId(editionId: number): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.URL}/${editionId}`);
    }
  }