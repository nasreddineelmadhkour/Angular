import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/Todo';
import { CalculServiceService } from '../services/calcul-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTodo:Todo[]=[]
  c!:number
  constructor(private _serviceCalcul:CalculServiceService) {
   }

  ngOnInit(): void {
    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem","completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}];
  }

  getBilan(){
    this.c=this._serviceCalcul.getNumberOf(this.listTodo,"completed",true);
  }

}
