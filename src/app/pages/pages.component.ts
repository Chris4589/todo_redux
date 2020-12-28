import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { togleAll } from '../components/actions';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  completado:boolean = false;

  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  togleAll(){
    this.completado = ! this.completado;
    this.store.dispatch(togleAll({completado: this.completado}));
  }
}
