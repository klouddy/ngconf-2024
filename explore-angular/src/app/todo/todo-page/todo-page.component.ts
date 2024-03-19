import { Component, inject } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoService } from '../todo.service';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  private todoService = inject(TodoService);

  constructor() {
    this.todoService.newItem('someitem');
  }

  getTodoItems(): TodoItem[] {
    console.log('here');
    return this.todoService.todoItems;
  }
}
