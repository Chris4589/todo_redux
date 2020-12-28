import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO], crear',
    props<{ texto:string }>()
);

export const togle = createAction(
    '[TODO], togle',
    props<{ id:number }>()
);

export const editar = createAction(
    '[TODO], editar',
    props<{ id:number, texto:string }>()
);

export const eliminar = createAction(
    '[TODO], eliminar',
    props<{ id:number }>()
);

export const togleAll = createAction(
    '[TODO], togleAll',
    props<{ completado:boolean }>()
);

export const Clear = createAction(
    '[Clean], clean'
);