import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    SERVER_URL = "http://localhost:8080/api/course";
    
    constructor(private http: HttpClient) {}

    isServerOnline(): Observable<Boolean> {
        return this.http.get<Boolean>(`${this.SERVER_URL}/online`);
    }

}