import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { filtrosValidos } from './filter/filter.actions';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValidos): Todo[] {

    switch(filtro){
      case 'completados':
        return todos.filter(data => data.completado );
      case 'pendientes':
        return todos.filter(data => !data.completado );
      default:
        return todos;
    }
  }

}
