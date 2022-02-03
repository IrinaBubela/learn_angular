import { SessionStorageService } from "../services/session-storage.service";
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private sessionStorage: SessionStorageService, private auth: AuthService,  private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const authToken = this.sessionStorage.getToken();
        if(authToken){
            req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${authToken}`
            }})
        }
        
        return next.handle(req).pipe( tap(() => {},
        (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
           return;
          }
          this.router.navigate(['login']);
          this.auth.logout();
        }
      }));
    }
}
