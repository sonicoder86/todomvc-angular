import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { TodoInterface } from '../../services/todo.interface';
import { onClearCompleted, onCompleteAll, onCreate, onLoad, onRemove, onUpdate } from '../actions/todo.action';
import { selectCompleted, selectNotCompleted } from '../selectors/todo.selector';

const areAllCompleted = state => state.length && selectCompleted(state).length === state.length;

export const createTodoReducer = (initialState: TodoInterface[] = []) =>
  createReducer(
    initialState,
    on(onLoad, (state: TodoInterface[], { todos }) => {
      return todos;
    }),
    on(onCreate, (state: TodoInterface[], { name }) => {
      return [...state, { id: uuidv4(), name, completed: false }];
    }),
    on(onUpdate, (state: TodoInterface[], { values }) => {
      return state.map(todo => (todo.id === values.id ? { ...todo, ...values } : todo));
    }),
    on(onRemove, (state: TodoInterface[], { id }) => {
      return state.filter(todo => todo.id !== id);
    }),
    on(onCompleteAll, (state: TodoInterface[]) => {
      return state.map(todo => ({ ...todo, ...{ completed: !areAllCompleted(state) } }));
    }),
    on(onClearCompleted, (state: TodoInterface[]) => {
      return selectNotCompleted(state);
    })
  );
