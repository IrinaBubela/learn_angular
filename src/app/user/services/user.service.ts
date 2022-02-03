import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _name = new BehaviorSubject<any[]>([]);
  public name$ = this._name.asObservable();

  private _isAdmin = new BehaviorSubject<any>([]);
  public isAdmin$ = this._isAdmin.asObservable();

  url:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.url + '/users/me')
    .subscribe(
      (response:any) => {
          this._isAdmin.next({
            name: response.name
          });
      });
  }
}
