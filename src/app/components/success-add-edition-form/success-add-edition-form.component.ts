import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-add-edition-form',
  templateUrl: './success-add-edition-form.component.html',
  styleUrls: ['./success-add-edition-form.component.css']
})
export class SuccessAddEditionFormComponent implements OnInit {
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      setTimeout(() => {
        this.router.navigate(['/editions']); 
      }, 2000);
    }
  }

