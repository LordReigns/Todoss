import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  api_url = "http://localhost:5252/api";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  getTodos(): Observable<Todo>{
    return this.http
      .get<Todo>(this.api_url + '/todos');
  }

  getTodoById(id: number): Observable<Todo>{
    return this.http
      .get<Todo>(this.api_url + "/todos/" + id);
  }

  completeTodo(id: number){
      return this.http
        .put<Todo>(this.api_url+'/todos/' + id + '/complete', {});
  }
}
