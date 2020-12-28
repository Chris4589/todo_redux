import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    TodoItemComponent, 
    TodoListComponent, FiltroPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    TodoItemComponent, 
    TodoListComponent
  ]
})
export class ComponentsModule { }
