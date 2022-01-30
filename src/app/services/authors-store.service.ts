import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorsStoreService{

  private _authorSource = new BehaviorSubject<any>([]);
  public authors$ = this._authorSource.asObservable().pipe(distinctUntilChanged());;

  private _courseSource = new BehaviorSubject<any>([]);
  public courses$ = this._courseSource.asObservable();

  private _isLoading = new BehaviorSubject<any[]>([]);
  public isLoading$ = this._isLoading.asObservable();

  
  public authorArray: any;

  constructor(private service: AuthorsService) { }

  getAll(): any {
    return this.service.getAll().subscribe(
      (response:any) => {
          this._authorSource.next({
            authors: response.result.map((x:any) => x.name)
          });
      });
  }

  createCourse(): any{
    return this.service.createCourse().subscribe(
      (response:any) => {
          this._courseSource.next({
            createdCourse: response
          });
      });
  }

  editCourse(): any{
    return this.service.editCourse()
  }

  getCourse(): any{
    return this.service.getCourse().subscribe(
      (response:any) => {
          this._courseSource.next({
            editedCourse: response
          });
      });
  }

  deleteCourse(): any{
    return this.service.deleteCourse().subscribe(
      (response:any) => {
          this._courseSource.next({
            deletedCourse: response
          });
      });
  }
}
