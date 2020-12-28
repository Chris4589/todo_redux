
import { createAction, createReducer, props } from '@ngrx/store';


export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const Filter = createAction(
    '[Filtro], Filtro',
    props<{filtro:filtrosValidos}>()
);
