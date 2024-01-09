import { Component, Input, OnInit } from '@angular/core';
import { Area } from 'src/model/dtos/area';
import { AreaService } from 'src/services/area/area.service';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit{
  @Input('areas') area:Area|null = null;
  areas:Area[]=[];
  
  constructor(private areaservice : AreaService){

  }

 ngOnInit() {
    this.fetchAllAreas();
     
 } 
 fetchAllAreas(){
    this.areaservice.getAllAreas().subscribe({
    next:as=> {
      this.areas=as;
      
    },
    error:(error)=> {
      console.error('Diahanee');
        
    }

});


 }



}