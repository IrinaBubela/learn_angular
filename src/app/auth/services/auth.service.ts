import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized = new BehaviorSubject<any[]>([]);
  public isAuthorized$ = this._isAuthorized.asObservable();

  url:string = "http://localhost:3000";

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  login() {
    return this.http.post(this.url + '/login', 
      {
        "name": "test name",
        "email": "test email",
        "password": "test password"
      });
  }

  register() {
    return this.http.post(this.url + '/register',
    {
      "name": "test name",
      "email": "test email",
      "password": "test password"
    });
  }

  logout() {
    return this.http.delete(this.url + '/logout' );
  }
}
