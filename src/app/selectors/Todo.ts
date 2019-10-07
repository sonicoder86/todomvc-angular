import { FILTERS } from '../constants/Filters';
import { TodoInterface } from '../interfaces/todo.interface';

export function selectVisible(todos, filter) {
  switch (filter) {
    case FILTERS.all:
      return [...todos];
    case FILTERS.completed:
      return selectCompleted(todos);
    case FILTERS.active:
      return selectNotCompleted(todos);
    default:
      return [...todos];
  }
}

export function selectNotCompleted(todos: TodoInterface[]): TodoInterface[] {
  return todos.filter(todo => !todo.completed);
}

export function selectCompleted(todos: TodoInterface[]): TodoInterface[] {
  return todos.filter(todo => todo.completed);
}
