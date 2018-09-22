import { reducer as layoutReducer } from './layout/layout.reducers';
import { LayoutState } from './layout/layout.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    layout: LayoutState
}

export const reducers: ActionReducerMap<AppState> = {
    layout: layoutReducer
}