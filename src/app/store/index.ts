import { createTodoReducer } from './reducers/todo.reducer';
import { FILTERS } from '../constants/filter';
import { TodoStateInterface } from './todo-state.interface';
import { createFilterReducer } from './reducers/filter.reducer';

export const createStore = (initialState: TodoStateInterface = { todos: [], filter: FILTERS.all }) => ({
  todos: createTodoReducer(initialState.todos),
  filter: createFilterReducer(initialState.filter)
});
