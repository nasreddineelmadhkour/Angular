import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    
    return list.filter((v)=>v[critiria]==value).length

  }

}
