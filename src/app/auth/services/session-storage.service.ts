import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  window: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
     this.window = this.document.defaultView;
  }

  setToken(token: string): void{
    sessionStorage.setItem('token', token)
  }

  getToken(): string | null{
    return sessionStorage.getItem('token')
  }

  deleteToken(): void{
    sessionStorage.removeItem('token')
  }
}
