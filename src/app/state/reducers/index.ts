import { combineReducers } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { filterReducer } from './filter.reducer';
import { FILTERS } from '../../constants/Filters';

export const rootReducer = combineReducers(
  {
    todos: todoReducer,
    filter: filterReducer
  },
  {
    todos: [],
    filter: FILTERS.all
  }
);
