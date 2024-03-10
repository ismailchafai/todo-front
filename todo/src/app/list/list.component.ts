import {Component, OnInit} from '@angular/core';
import {Todo} from "../controler/module/todo";
import {TodoService} from "../controler/service/todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  constructor(private todoService : TodoService) {}

  ngOnInit(){
    this.findAll();
  }

  public deleteById(todo:Todo , index:number){
    this.todoService.deleteById(todo.id).subscribe(data=>{
      if (data>0) {
        console.log("index:::"+index);
        console.log("data:::"+data)

        this.todos.splice(index, 1);

      }else {
        alert('delete error')
        console.log(data)
        console.log("index:::"+index);
      }
      this.ngOnInit();
    })
  }
  public  findAll(){
    this.todoService.getAll().subscribe(
      data=>this.todos = data
    )    
  }
  public update(){
    
  }
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
