import { Component, OnInit } from '@angular/core';
import { driven } from '../core/Driven';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  Driven!:driven;
   titreg="Informations générales ";
   titrep="Informations de payement ";

  constructor() { }

  ngOnInit(): void {
    this.Driven= new driven();
  }
  ajouter(){
    console.log(this.Driven)
  }

}
