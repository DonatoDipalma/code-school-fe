import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditionDetail } from 'src/model/dtos/edition-detail';
import { EditionService } from 'src/services/editions/editions.service';

@Component({
  selector: 'app-upcoming-edition-detail',
  templateUrl: './upcoming-edition-detail.component.html',
  styleUrls: ['./upcoming-edition-detail.component.css']
})
export class UpcomingEditionDetailComponent {
  ue: EditionDetail | undefined;
  edId!: Number;

    constructor(private editionService: EditionService, private route: ActivatedRoute){}

    ngOnInit() {
        this.edId = Number(this.route.snapshot.paramMap.get("id"));
        console.log("HO RICEVUTO QUESTO ID: "+this.edId);
        this.fetchEditionDetails();
    }

    fetchEditionDetails() {
        this.editionService.getEditionDetails(this.edId).subscribe({
            next: ue => {
                this.ue = ue;
                console.log(this.ue);
            },
            error: (error) => {
                console.error('Errore nel recupero delle edizioni:', error);
            }
        });
    }
}
