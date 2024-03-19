import { Component, Input, input } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  @Input({required: true})todoItem!: TodoItem;
  
}
