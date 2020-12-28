import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/models/todo.model';
import { filtrosValidos } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todo:Todo[] = [];
  filtro:filtrosValidos = 'pendientes';
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe((td)=>{
      this.todo = td.todos;
      this.filtro = td.filtro;
    });
    
  }

}
