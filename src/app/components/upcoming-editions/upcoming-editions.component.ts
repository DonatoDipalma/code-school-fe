import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from 'src/model/dtos/area';

import { Edition } from 'src/model/dtos/edition';
import { CompetenceService } from 'src/services/competence/competence.service';

import { EditionService } from 'src/services/edition/edition.service';

@Component({
  selector: 'app-upcoming-editions',
  templateUrl: './upcoming-editions.component.html',
  styleUrls: ['./upcoming-editions.component.css']
})
export class UpcomingEditionsComponent implements OnInit{
  
  allUpcomingEditions:Edition[]=[];
  areas :Area[]=[];
  areaForm!: FormGroup;
  
  constructor(private route: Router, 
              private formBuilder: FormBuilder,
              private editionService: EditionService, 
              private areaService: CompetenceService){}
  
  
  ngOnInit() {
    this.areaForm = this.formBuilder.group({
      areaIdForm: ['Seleziona un\'area']
    })
    this.fetchAllAreas();
    this.fetchUpcomingEdition();
}

fetchAllAreas(){
  this.areaService.getAllAreas().subscribe({
    next:as=> {
      this.areas=as;
      console.log(as);
      
    },
    error:(error)=> {
      console.error('Errore nel recupero Aree');
        
    }

  });
}

fetchUpcomingEdition() {
  this.editionService.getUpcomingEdition().subscribe({
    next: eds => {
      this.allUpcomingEditions = eds.map((ed: Edition) => { 
        return { ...ed };
      });
    },
    error: (error) => {
      console.error('Errore nel recupero delle edizioni:', error);
    }
  });
}

filterAreas() {
  const selectedAreaId = this.areaForm.get('areaIdForm')?.value;
  
  if (selectedAreaId !== null) {
    this.editionService.getUpcomingEditionsByArea(selectedAreaId).subscribe({
      next: ue => {
        this.allUpcomingEditions = ue;
      },
      error: (error) => {
        console.error('Errore nel recupero delle prossime edizioni:', error);
      }
    });
  } else {
    this.editionService.getUpcomingEdition().subscribe({
      next: ue => {
        this.allUpcomingEditions = ue;
      },
      error: (error) => {
        console.error('Errore nel recupero delle prossime:', error);
      }
    });
  }
}

goToAllEditions() {
  this.route.navigate(['/editions'])
}

deleteEdition(editionId: number){
  this.editionService.deleteEditionById(editionId).subscribe(()=>{
    this.allUpcomingEditions = this.allUpcomingEditions.filter(edition => edition.id !== editionId);   
  });
}

}
