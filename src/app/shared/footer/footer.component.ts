import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Clear } from 'src/app/components/actions';
import { Filter, filtrosValidos } from 'src/app/components/filter/filter.actions';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  filtro:filtrosValidos = 'todos';
  filtros:filtrosValidos[]=[
    'todos',
    'completados',
    'pendientes'
  ];
  todo:Todo[] = [];
  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe((fl)=> this.filtro = fl);
    
    this.store.select('todos').subscribe((todo)=> this.todo = todo);
    console.log(this.tareasPendientes());
  }
  cambiarFiltro(filtro:filtrosValidos){
    this.store.dispatch(Filter({filtro}));
  }
  tareasPendientes(){
    return this.todo.filter((data:any)=>!data.completado);
  }
  clean(){
    this.store.dispatch(Clear());
  }
}
