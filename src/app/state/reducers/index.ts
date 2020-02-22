import { createTodoReducer } from './todo.reducer';
import { FILTERS } from '../../constants/Filters';
import { TodoStateInterface } from '../../interfaces/todo-state.interface';
import { createFilterReducer } from './filter.reducer';

export const createRootReducerMap = (initialState: TodoStateInterface = { todos: [], filter: FILTERS.all }) =>
  ({
    todos: createTodoReducer(initialState.todos),
    filter: createFilterReducer(initialState.filter)
  });
