import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
  title: string = 'todo-list';
}

