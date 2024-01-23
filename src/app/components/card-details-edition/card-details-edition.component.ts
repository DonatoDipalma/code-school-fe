import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetailsDto } from 'src/model/dtos/edition-details';
import { EditionService } from 'src/services/edition/edition.service';


@Component({
  selector: 'app-card-details-edition',
  templateUrl: './card-details-edition.component.html',
  styleUrls: ['./card-details-edition.component.css']
})
export class CardDetailsEditionComponent implements OnInit{
    editionDetails!: EditionDetailsDto;
    editionId!: number;
  
    constructor(
      private route: ActivatedRoute,
      private editionService: EditionService,
    ) {}
  
    ngOnInit(): void {
      this.editionId = this.route.snapshot.params['editionId']; 
      this.loadEditionDetails();
    }
  
    loadEditionDetails(){
      this.editionService.getEditionDetailsById(this.editionId).subscribe({
        next: edt => {
          this.editionDetails = edt;
          console.log(this.editionDetails);
        },
        error: err => {
          console.error('Errore nel recupero dei dettagli dell\'edizione:', err);
        }
    });
    }

}
