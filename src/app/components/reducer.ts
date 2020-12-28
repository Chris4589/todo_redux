import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "src/models/todo.model";
import { Clear, crear, editar, eliminar, togle, togleAll } from "./actions";

export const texto:Todo[] = [
    new Todo('salve mundo'),
    new Todo('salve 2'),
    new Todo('salve 3')
];

const todoReducer = createReducer(texto,
    on(crear, (state, {texto})=> [...state, new Todo(texto)]),
    on(togle, (state, {id})=>{

        return state.map((todo)=>{
            return todo.id !== id ? todo : {
                ...todo,
                completado: !todo.completado
            };
        });
    }),
    on(editar, (state, {id, texto})=>{
        return state.map((todo)=>{
            return todo.id !== id ? todo : {
                ...todo,
                texto: texto
            };
        });
    }),
    on(eliminar, (state, {id})=>{

        return state.filter( todo =>{
            return todo.id !== id
        });
    }),
    on(togleAll, (state, {completado})=>{
        return state.map((todo)=>{
            return {
                ...todo,
                completado:completado
            }
        })
    }),
    on(Clear, (state)=>{
        return state.filter((dat)=>!dat.completado);
    })
)

export function reducer(state:any, action:Action){
    return todoReducer(state, action);
}