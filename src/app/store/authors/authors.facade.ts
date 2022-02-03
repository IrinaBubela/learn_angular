import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import { requestAuthors, requestAddAuthor } from "./authors.actions";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

export interface AuthorsState {
    authors: string[],
    addedAuthor: string
}

@Injectable({
    providedIn: 'root',
})
export class AuthorsStateFacade {

    public addedAuthor$: Observable<any>;
    public authors$: Observable<any>;

    constructor(private store: Store<AuthorsState>) {
        this.addedAuthor$ = this.store.pipe(select(getAddedAuthors));
        this.authors$ = this.store.pipe(select(getAuthors));
    }

    getAuthors() {
        this.store.dispatch(requestAuthors());
    }

    addAuthor(author: Author) {
        this.store.dispatch(requestAddAuthor({ author }));
    }

}
