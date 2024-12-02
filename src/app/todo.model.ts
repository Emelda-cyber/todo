export class Todo {

  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }
}