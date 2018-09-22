import * as layout from './layout.actions';
import { LayoutState, initialState } from './layout.state';
import { LayoutItem } from '../../domain/layout-item';

const removeRecursive = (tree: LayoutItem, item: LayoutItem) => {
    if (tree.children && tree.children.length > 0) {
        tree.children = tree.children.filter(c => c.id !== item.id);
        tree.children.forEach(c => removeRecursive(c, item));
    }
}

const addRecursive = (tree: LayoutItem, to: LayoutItem, what: LayoutItem) => {
    if (tree.id === to.id) tree.children.push(what);
    else if (tree.children && tree.children.length > 0) tree.children.forEach(c => addRecursive(c, to, what));
}

export function reducer(state = initialState, action: layout.Actions): LayoutState {
    switch (action.type) {
        case layout.SET_LAYOUT:
            return { layout: action.payload, dragged: null }
        case layout.DRAG_ITEM:
            return { ...state, dragged: action.payload }
        case layout.DROP_ITEM:
            removeRecursive(state.layout, state.dragged);
            addRecursive(state.layout, action.payload, state.dragged);
            return { ...state, dragged: null } //TODO check immutable
        default:
            return state;
    }
}

