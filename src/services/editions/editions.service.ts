import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edition } from 'src/model/dtos/edition';
import { EditionDetail } from 'src/model/dtos/edition-detail';

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  private URL = 'http://localhost:8080/api/edition';

  constructor(private http: HttpClient) { }

  getUpcomingEditions(): Observable<Edition[]> {
    return this.http.get<Edition[]>(`${this.URL}/upcoming`);
  }

  getUpcomingEditionsByArea(areaId: Number): Observable<Edition[]> {
    return this.http.get<Edition[]>(`${this.URL}/upcomingWithArea/${areaId}`);
  }

  getEditionDetails(editionId: Number): Observable<EditionDetail> {
    return this.http.get<EditionDetail>(`${this.URL}/${editionId}`);
  }
 }