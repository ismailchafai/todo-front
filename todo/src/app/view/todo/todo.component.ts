import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../controler/service/todo.service";
import {Todo} from "../../controler/module/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
constructor(private todoService : TodoService) {}
  ngOnInit():void{}
public save():void{
  this.todoService.save().subscribe(
    res=>{
      alert('save success');
      this.todoService.getAll();       
    },
    err=>{
      alert(err);
    }
  )
};
  get todo(): Todo {
    return this.todoService.todo;
  }

  set todo(value: Todo) {

    this.todoService.todo=value;
  }

  get todos(): Array<Todo> {
    return this.todoService.todos;
  }

  set todos(value: Array<Todo>) {
    this.todoService.todos= value;
  }
}
