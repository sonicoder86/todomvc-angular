import { TodoInterface } from './todo.interface';

export interface TodoStateInterface {
  todos: TodoInterface[],
  filter: string
}
