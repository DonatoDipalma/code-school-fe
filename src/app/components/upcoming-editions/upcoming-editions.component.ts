import { Component, Input } from '@angular/core';
import { Edition } from 'src/model/dtos/edition';
import { EditionService } from 'src/services/editions/editions.service';

@Component({
  selector: 'app-upcoming-editions',
  templateUrl: './upcoming-editions.component.html',
  styleUrls: ['./upcoming-editions.component.css']
})
export class UpcomingEditionsComponent {
  @Input('upcoming') upcoming: Edition | null = null;
  upcomingEdition: Edition[] = [];

    constructor(private editionService: EditionService){}

    ngOnInit(){
        this.fetchUpcomingEditions();
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
}
