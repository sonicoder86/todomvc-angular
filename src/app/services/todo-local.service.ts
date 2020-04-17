import { TodoInterface } from './todo.interface';

const LOCAL_STORAGE_KEY = 'todoapp_todos';

export class TodoLocalService {
  static loadTodos(): TodoInterface[] {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  }

  static storeTodos(todos: TodoInterface[]) {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }
}
