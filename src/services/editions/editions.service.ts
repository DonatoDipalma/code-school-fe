import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edition } from 'src/model/dtos/edition';

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  private URL = 'http://localhost:8080/api/edition';

  constructor(private http: HttpClient) { }

  getUpcomingEditions(): Observable<Edition[]> {
    return this.http.get<Edition[]>(`${this.URL}/upcoming`);
  }
}