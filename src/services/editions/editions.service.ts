import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Edition } from "src/model/dtos/editions";
@Injectable({
    providedIn : "root"
})
export class EditionsService{
    URL = "http://localhost:8080/api/editions/"
    constructor(private http: HttpClient){
    }

    getNineEditions(): Observable<Edition[]> {
        return this.http.get<Edition[]>(this.URL);
    }
}