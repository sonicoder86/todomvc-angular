import { createTodoReducer } from './reducers/todo.reducer';
import { FILTERS } from '../constants/Filters';
import { TodoStateInterface } from '../interfaces/todo-state.interface';
import { createFilterReducer } from './reducers/filter.reducer';

export const storeFactory = (initialState: TodoStateInterface = { todos: [], filter: FILTERS.all }) =>
  ({
    todos: createTodoReducer(initialState.todos),
    filter: createFilterReducer(initialState.filter)
  });
