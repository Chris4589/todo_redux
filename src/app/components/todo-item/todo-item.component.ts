import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/models/todo.model';
import { editar, eliminar, togle } from '../actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('fisico') txtFIsico!:ElementRef
  txtForm!: FormGroup;

  editando:boolean = false;
  id:string = '';

  constructor(
    private fb:FormBuilder,
    private store:Store<AppState>
  ) { 
    
  }

  ngOnInit(): void {
    this.txtForm = this.fb.group({
      completado:[this.todo.completado, Validators.required ],
      texto: [this.todo.texto, Validators.required]
    });
    
    this.txtForm.get('completado')?.valueChanges.subscribe(()=>{
      this.store.dispatch(togle({id:this.todo.id}));
    });
  }
  editar(id:any){

    this.editando = true;
    this.id = id;
    setTimeout(() => {
      this.txtFIsico.nativeElement.focus();
    }, 100);
  }
  terminarEdicion(){
    if(this.txtForm.get('texto')?.invalid)
      return;

    this.editando = false;
    this.store.dispatch(editar({id: this.todo.id, texto:this.txtForm.get('texto')?.value}))
  }
  borrar(id:number){
    this.store.dispatch(eliminar({ id }));
  }
}
