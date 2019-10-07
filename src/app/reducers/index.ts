import { Action, combineReducers } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { State } from '../buzi';
import { TodoInterface } from '../interfaces/todo.interface';

// export function reducer(state: TodoInterface[] | undefined, action: Action) {
//   return todoReducer(state, action);
// }


export function reducer(state: TodoInterface[] | undefined, action: Action) {
  return todoReducer(state, action);
}


