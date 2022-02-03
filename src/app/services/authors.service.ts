import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {

  url:string = "http://localhost:3000";
  id: string = "66cc289e-6de9-49b2-9ca7-8b4f409d6467";

  private _authors = new BehaviorSubject<any[]>([]);
  public authors$ = this._authors.asObservable();

  private _isLoading = new BehaviorSubject<boolean[]>([]);
  public isLoading$ = this._isLoading.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/authors/all');
  }

  addAuthor(): Observable<any>{
    return this.http.post(this.url + '/authors/add', {name: 'author x'})
  }

  createCourse(): Observable<any>{
    return this.http.post(this.url + '/courses/add', 
      { title: 'UX/UI Design Course',
        description: 'Long description',
        duration: 130,
        authors: [
          "person1",
          "person2"
        ]
    })
  }

  editCourse(): Observable<any>{
    return this.http.put(`${this.url}/courses/${this.id}`, 
      { title: 'UX/UI Design Course but now its Modified',
        description: 'Long description',
        duration: 130,
        authors: [
          "person1",
          "person2"
        ]
    })
  }

  getCourse(): Observable<any>{
    return this.http.get(`${this.url}/courses/${this.id}`);
  }

  deleteCourse(){
    return this.http.delete(`${this.url}/courses/${this.id}`);
  }
}
