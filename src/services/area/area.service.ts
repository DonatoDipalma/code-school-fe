import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from 'src/model/dtos/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  
    private URL = 'http://localhost:8080/api/areas';
  
    constructor(private http: HttpClient) { }
  
    getAllAreas(): Observable<Area[]> {
      return this.http.get<Area[]>(`${this.URL}/`);
    }
  
    
  }