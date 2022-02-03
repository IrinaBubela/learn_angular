import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { requestCurrentUser } from "./user.actions";
import { initialState } from "./user.reducer";

@Injectable({
    providedIn: 'root',
})
export class TodoListFacade {

    static CURRENT_USER = '[Current User] Request current user';

    public name$: Observable<any>;
    public isAdmin$: Observable<any>;

    constructor(private store: any) {
        this.store = initialState;
    }

    getCurrentUser(): void {
        this.store.dispatch({type: requestCurrentUser});
    }

}
