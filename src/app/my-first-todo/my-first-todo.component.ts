import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './my-first-todo.component.html',
  styleUrls: ['./my-first-todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    const newTodo = new Todo(this.todos.length + 1, this.newTodoTitle, false);
    this.todos.push(newTodo);
    this.newTodoTitle = '';
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }

removeTodo (todo: Todo): void {
  this.todos = this.todos.filter(t => t.title !== todo.title);
}
}
