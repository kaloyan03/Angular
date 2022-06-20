import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos = this.todoService.getTodos().subscribe(data => console.log(data));

  loadTodos() {
    this.todoService.getTodos().subscribe(data => console.log(data));
  }

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

}
