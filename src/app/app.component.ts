import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstTodoComponent } from "./my-first-todo/my-first-todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
