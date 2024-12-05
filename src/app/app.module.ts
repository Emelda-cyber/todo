import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TodoComponent } from './my-first-todo/my-first-todo.component';



@NgModule({
  declarations: [
    TodoComponent,
    AppComponent
   ],
  imports: [
    CommonModule,
    
    
  ],
})
export class AppModule { }
