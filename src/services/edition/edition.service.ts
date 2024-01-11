import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edition } from 'src/model/dtos/edition';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
@Injectable({
  providedIn: 'root'
})
export class EditionService {
  
    private URL = 'http://localhost:8080/api/edition';
  
    constructor(private http: HttpClient) { }
  
    getUpcomingEdition(): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/`);
    }

    getUpcomingEditionsByArea(areaId: Number): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/upcomingWithArea/${areaId}`);
    }

    getEditionDetailsById(editionId: number): Observable<EditionDetailsDto> {
      console.log("Sto nella service ricevuto: " + editionId);
      return this.http.get<EditionDetailsDto>(`${this.URL}/${editionId}`);
    }
  }