import { Injectable } from '@angular/core';
import {Todo} from '../module/todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todo: Todo = new Todo;
  private _todos: Array<Todo> = [];
  private url = 'http://localhost:8030/todo'

  public save(): Observable<Todo> {
    // @ts-ignore
    return this.http.post<Todo>(this.url + '/addTode', this.todo)
  }

  public getAll(): Observable<Array<Todo>> {
    // @ts-ignore
    return this.http.get<Todo>(this.url + '/findAll')
  }

  public deleteById(id: number):Observable<number>{
    return this.http.delete<number>(this.url+'/deleteTodo/'+id)
  }
  constructor(private http: HttpClient) {
  }

  get todo(): Todo {
    return this._todo;
  }

  set todo(value: Todo) {
    if (this._todo == null) {
      this._todo = new Todo();
    }
    this._todo = value;
  }

  get todos(): Array<Todo> {
    if (this._todos == null) {
      this._todos = new Array<Todo>();
    }
    return this._todos;
  }

  set todos(value: Array<Todo>) {
    this._todos = value;
  }

}
