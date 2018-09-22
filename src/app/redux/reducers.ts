
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {

    router: any
}

export const reducers: ActionReducerMap<AppState> = {

    router: routerReducer
}