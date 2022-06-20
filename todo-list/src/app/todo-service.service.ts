import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todosUrl = 'http://localhost:3030/jsonstore/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.http.get(this.todosUrl);
  }
}
