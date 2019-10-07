import {
  clearCompletedTodosAction,
  completeAllTodoAction,
  createTodoAction,
  loadTodosAction,
  removeTodoAction,
  updateTodoAction
} from '../actions/todo.actions';
import { createReducer, on } from '@ngrx/store';
import uuid from 'uuid';
import { TodoInterface } from '../interfaces/todo.interface';
import { selectCompleted, selectNotCompleted } from '../selectors/Todo';

export interface RootState {
  todos: TodoInterface[];
  filter: string;
}

export const todoReducer = createReducer(
  [],
  on(loadTodosAction, (state: TodoInterface[], { todos }) => {
    return todos;
  }),
  on(createTodoAction, (state: TodoInterface[], { name }) => {
    return [...state, { id: uuid.v4(), name, completed: false }];
  }),
  on(updateTodoAction, (state: TodoInterface[], { id, values }) => {
    return state.map(
      todo => todo.id === id ? { ...todo, ...values } : todo
    );
  }),
  on(removeTodoAction, (state: TodoInterface[], { id }) => {
    return state.filter(todo => todo.id !== id);
  }),
  on(completeAllTodoAction, (state: TodoInterface[]) => {
    const areAllCompleted = state.length && selectCompleted(state).length === state.length;
    return state.map(
      todo => ({ ...todo, ...{ completed: !areAllCompleted } })
    );
  }),
  on(clearCompletedTodosAction, (state: TodoInterface[]) => {
    return selectNotCompleted(state);
  })
);
