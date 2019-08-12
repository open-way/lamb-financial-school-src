import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

class Action {
    acceso: string;
    clave: string;
    id_modulo: string;
    id_rol: string;
    metodo: string;
    rol: string;
}

@Injectable()
export class StoreUserActionsService {

    private state = {
        userActions: [],
    };

    private userActions$ = new ReplaySubject<Action[]>(1);

    constructor() { }

    public getUserActions$(): Observable<Action[]> {
        return this.userActions$.asObservable();
    }

    public setUserActions(actions: Action[]) {
        if (actions.length) {
            this.state.userActions = actions;
        } else {
            this.state.userActions = [];
        }

        this.userActions$.next(this.state.userActions);
    }
}

