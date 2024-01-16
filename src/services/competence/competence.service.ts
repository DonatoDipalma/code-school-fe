import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from 'src/model/dtos/area';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  
    private AREA_URL = 'http://localhost:8080/api/area';
    private COMPETENCE_URL = 'http://localhost:8080/api/competence';
  
    constructor(private http: HttpClient) { }
  
    getAllAreas(): Observable<Area[]> {
      return this.http.get<Area[]>(`${this.AREA_URL}/`);
    }
  
    getAllLevels(): Observable<string[]> {
      return this.http.get<string[]>(`${this.COMPETENCE_URL}/levels`);
    }

  }