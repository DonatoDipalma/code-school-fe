import { Component, Input, OnInit } from '@angular/core';
import { Area } from 'src/model/dtos/area';

import { Edition } from 'src/model/dtos/edition';
import { AreaService } from 'src/services/area/area.service';

import { EditionService } from 'src/services/edition/edition.service';

@Component({
  selector: 'app-upcoming-editions',
  templateUrl: './upcoming-editions.component.html',
  styleUrls: ['./upcoming-editions.component.css']
})
export class UpcomingEditionsComponent implements OnInit{
  
  allUpcomingEditions:Edition[]=[];
  areas :Area[]=[];
  
  constructor(private editionservice : EditionService, private areaservice :AreaService){

  }
  
  ngOnInit(){
    this.fetchUpcomingEdition();
    this.fetchAllAreas();
    
  }

  fetchUpcomingEdition(){
    this.editionservice.getUpcomingEdition().subscribe({
        next:eds=> {
          this.allUpcomingEditions=eds;
          
        },
        error:(error)=> {
          console.error('Diahanee');
            
        }

    });
  }
  fetchAllAreas(){
    this.areaservice.getAllAreas().subscribe({
    next:as=> {
      this.areas=as;
      console.log(as);
      
    },
    error:(error)=> {
      console.error('Diahanee');
        
    }
  

})};}
