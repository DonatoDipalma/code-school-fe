import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Area } from 'src/model/dtos/area';
import { Edition } from 'src/model/dtos/edition';
import { AreaService } from 'src/services/areas/areas.service';
import { EditionService } from 'src/services/editions/editions.service';

@Component({
  selector: 'app-upcoming-editions',
  templateUrl: './upcoming-editions.component.html',
  styleUrls: ['./upcoming-editions.component.css']
})
export class UpcomingEditionsComponent implements OnInit {
  
  areaForm!: FormGroup;
  upcomingEdition: Edition[] = [];
  areas: Area[] = [];

    constructor(private formBuilder: FormBuilder, private editionService: EditionService, private areaService: AreaService){}

    ngOnInit() {
        this.areaForm = this.formBuilder.group({
          areaIdForm: ['Seleziona un\'area']
        })
        this.fetchAllAreas();
        this.fetchUpcomingEditions();
    }

    fetchAllAreas() {
      this.areaService.getAllAreas().subscribe({
        next: a => {
          this.areas = a;
          console.log(this.areas);
        },
        error: (error) => {
          console.error('Errore nel recupero delle aree:', error);
        }
      });
    }

    fetchUpcomingEditions() {
        this.editionService.getUpcomingEditions().subscribe({
            next: ue => {
                this.upcomingEdition = ue;
                console.log(this.upcomingEdition);
            },
            error: (error) => {
                console.error('Errore nel recupero delle edizioni:', error);
            }
        });
    }

    onSubmit() {
        this.editionService.getUpcomingEditionsByArea(this.areaForm.get('areaIdForm')?.value).subscribe({
          next: ue => {
            this.upcomingEdition = ue;
            console.log(this.upcomingEdition);
        },
        error: (error) => {
            console.error('Errore nel recupero delle edizioni:', error);
        }
      });
    }
}
