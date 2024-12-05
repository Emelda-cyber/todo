import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TodoComponent } from './my-first-todo/my-first-todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodoComponent]

})
export class AppComponent {
  title: string = 'todo-list';
}

