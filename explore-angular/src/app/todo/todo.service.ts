import { Injectable } from "@angular/core";
import { TodoItem } from "./models/todo-item";
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class TodoService {
    todoItems: TodoItem[] = [];

    newItem(tite: string) {
        let item: TodoItem = {
            id: uuidv4(),
            title: tite
        }
        this.todoItems.push(item)
    }

    
}