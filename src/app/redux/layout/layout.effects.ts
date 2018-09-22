import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from "@ngrx/store";
import * as LayoutActions from './layout.actions';

@Injectable()
export class LayoutEffects {
    constructor(private actions$: Actions) { }

}