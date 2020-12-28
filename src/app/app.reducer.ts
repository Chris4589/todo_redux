import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { Todo } from "src/models/todo.model";
import { Filter, filtrosValidos } from "./components/filter/filter.actions";
import { reducer } from './components/reducer';
import { _filterReducer } from './components/filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}


export const AppReducer:ActionReducerMap<any> = {
    todos:reducer,
    filtro: _filterReducer

}