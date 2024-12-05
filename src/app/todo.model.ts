export class Todo {

  title: string;
  completed: boolean;
  id: number;

  constructor(id: number, title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }
}