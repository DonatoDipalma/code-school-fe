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
    private LEVEL_URL = 'http://localhost:8080/api/competence/level';
    private SKILL_URL = 'http://localhost:8080/api/competence/skill';

    constructor(private http: HttpClient) { }
  
    getSkillByArea(areaId: number): Observable<Skill[]> {
      const params = new HttpParams().set('areaId', areaId);
      return this.http.get<Skill[]>(`${this.SKILL_URL}`,{params});
    }

    getAllAreas(): Observable<Area[]> {
      return this.http.get<Area[]>(`${this.AREA_URL}/`);
    }
  
    getAllLevels(): Observable<string[]>{
      return this.http.get<string[]>(`${this.LEVEL_URL}`)
    }
    
  }