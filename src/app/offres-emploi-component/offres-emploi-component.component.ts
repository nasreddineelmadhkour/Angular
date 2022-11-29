import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  listeEmploi!:Emploi[]
nbr!:number
searchText!:string
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[{reference:'001',titre:'maryem',entreprise:'esprit',etat:true},{reference:'002',titre:'sarra',entreprise:'sofrecom',etat:false}]
    
  }
Bilan(){
this.nbr=0
for(let i=0;i<this.listeEmploi.length;i++){
  if(this.listeEmploi[i].etat==true) this.nbr++

}
}
search(){
  this.listeEmploi=this.listeEmploi.filter((x)=>x.entreprise.match(this.searchText))
  
}

}
