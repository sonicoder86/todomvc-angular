import { Injectable } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.interface';

const LOCAL_STORAGE_KEY = 'todoapp_todos';

@Injectable({ providedIn: 'root' })
export class TodoStorageService {
  public loadTodos(): TodoInterface[] {
    return JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
    );
  }

  public storeTodos(todos: TodoInterface[]) {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }
}
