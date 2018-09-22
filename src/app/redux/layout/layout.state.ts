import { LayoutItem } from "../../domain/layout-item";

export interface LayoutState {
    layout: LayoutItem;
    dragged: LayoutItem;
}

export const initialState: LayoutState = {
    layout: null,
    dragged: null
};