import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crear } from 'src/app/components/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  txtInput: FormGroup;
  constructor(private fb:FormBuilder, private store:Store) { 
    this.txtInput = this.fb.group({
      texto: ['as', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  agregar(){
    if(this.txtInput.invalid)
      return;

    this.store.dispatch(crear(this.txtInput.value));

    this.txtInput.get('texto')?.reset();
  }
}
