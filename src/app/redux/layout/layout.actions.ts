import { Action } from '@ngrx/store';
import { LayoutItem } from '../../domain/layout-item';

export const SET_LAYOUT = '[Layout] Set Layout';
export const DRAG_ITEM = '[Layout] Drag Item';
export const DROP_ITEM = '[Layout] Drop Item';

export class SetLayoutAction implements Action {
    readonly type = SET_LAYOUT;

    constructor(public payload: LayoutItem) { }
}

export class DragItemAction implements Action {
    readonly type = DRAG_ITEM;

    constructor(public payload: LayoutItem) { }
}

export class DropItemAction implements Action {
    readonly type = DROP_ITEM;

    constructor(public payload: LayoutItem) { }
}

export type Actions
    = SetLayoutAction
    | DragItemAction
    | DropItemAction;
