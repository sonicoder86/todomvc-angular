import { TodoInterface } from '../services/todo.interface';

export interface TodoStateInterface {
  todos: TodoInterface[];
  filter: string;
}
