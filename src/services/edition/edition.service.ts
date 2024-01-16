import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edition } from 'src/model/dtos/edition';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { AddEdition } from 'src/model/dtos/add-edition';
@Injectable({
  providedIn: 'root'
})
export class EditionService {
  
    private URL = 'http://localhost:8080/api/edition';
  
    constructor(private http: HttpClient) { }
  
    getUpcomingEdition(): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/upcoming-editions`);
    }

    getUpcomingEditionsByArea(areaId: Number): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/upcomingWithArea/${areaId}`);
    }

    getEditionDetailsById(editionId: number): Observable<EditionDetailsDto> {
      console.log("Sto nella service ricevuto: " + editionId);
      return this.http.get<EditionDetailsDto>(`${this.URL}/${editionId}`);
    }

    deleteEditionById(editionId: number): Observable<any>{
      return this.http.delete(`${this.URL}/${editionId}`);
    }
    
    createEdition(editionData: AddEdition): Observable<void> {
      return this.http.post<void>(`${this.URL}/`, editionData);
    }
    getAllEditions(): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/all`);
    }
    
    getAllEditionsByAreaId(areaId: Number): Observable<Edition[]> {
      return this.http.get<Edition[]>(`${this.URL}/allWithArea/${areaId}`);
    }

    deleteTeacherByTeacherIdAndEditionModuleId(idTeacher: number, idModule: number){
      return this.http.delete(`${this.URL}/${idTeacher}/${idModule}`);
    }
  }