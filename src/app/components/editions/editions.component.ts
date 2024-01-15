import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from 'src/model/dtos/area';
import { Edition } from 'src/model/dtos/edition';
import { AreaService } from 'src/services/area/area.service';
import { EditionService } from 'src/services/edition/edition.service';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {
  editions: Edition[] = [];
  areas: Area[]=[];
  areaForm!: FormGroup


  constructor(private editionService: EditionService, private route: Router, private formBuilder: FormBuilder, private areaService: AreaService){}

  ngOnInit(): void {
    this.fetchAllAreas();
    this.fetchAllEdition();
    this.areaForm = this.formBuilder.group({ areaIdForm: ['Seleziona un\'area'] });
  }
  
  fetchAllAreas(){
    this.areaService.getAllAreas().subscribe({
      next:as=> {
        this.areas=as;
        console.log(as);
        
      },
      error:(error)=> {
        console.error('Diahanee');
          
      }
  });
}

fetchAllEdition() {
  this.editionService.getAllEditions().subscribe({
    next: eds => {
      this.editions = eds.map((ed: Edition) => {
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
    this.editionService.getAllEditionsByAreaId(selectedAreaId).subscribe({
      next: ed => {
        this.editions = ed;
      },
      error: (error) => {
        console.error('Errore nel recupero delle edizioni:', error);
      }
    });
  } else {
    this.editionService.getAllEditions().subscribe({
      next: ed => {
        this.editions = ed;
      },
      error: (error) => {
        console.error('Errore nel recupero delle edizioni:', error);
      }
    });
  }
}

goToUpcomingEditions() {
  this.route.navigate(['/upcomingEditions'])
}

deleteEdition(editionId: number){
  this.editionService.deleteEditionById(editionId).subscribe({
    next: () => {
      this.editions = this.editions.filter(edition => edition.id !== editionId);
    },
    error: error => {
      if(error.status === 400) {
        alert("Non è possibile cancellare un'edizione già iniziata");
      } else {
        alert("Errore durante l'eliminazione, " + error);
        console.error("Errore durante l'eliminazione", error);
      }
    }
  });
}
}