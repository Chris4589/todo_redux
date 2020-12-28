import { Action, createReducer, on } from '@ngrx/store';
import { Filter, filtrosValidos } from './filter.actions';

export const initialState:string = 'todos';

const reducer = createReducer(initialState,
    on(Filter, (state, {filtro})=> filtro)
);

export function _filterReducer(state:string, action:Action){
    return reducer(state, action)
}