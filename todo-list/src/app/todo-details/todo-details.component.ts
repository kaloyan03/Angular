import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, todos } from '../todo-list/todos';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | undefined;


  constructor(
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;

    let todoIdFromRoute = Number(params.get('todoId'));

    this.todo = todos.find(t => t.id == todoIdFromRoute);

  }

}
