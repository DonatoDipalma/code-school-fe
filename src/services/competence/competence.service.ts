import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from 'src/model/dtos/area';
import { Skill } from 'src/model/dtos/skill';

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

    getSkillByArea(idArea: number): Observable<Skill[]> {
      const params = new HttpParams().set('areaId', idArea);
      return this.http.get<Skill[]>(`${this.COMPETENCE_URL}/skill`, {params});
    }
  }