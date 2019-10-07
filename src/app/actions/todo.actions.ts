import { createAction, props } from '@ngrx/store';
import { ACTION_TYPES } from '../constants/ActionTypes';
import { TodoInterface } from '../interfaces/todo.interface';

export const loadTodosAction = createAction(
  ACTION_TYPES.load,
  props<{ todos: TodoInterface[] }>()
);

export const createTodoAction = createAction(
  ACTION_TYPES.create,
  props<{ name: string }>()
);

export const removeTodoAction = createAction(
  ACTION_TYPES.remove,
  props<{ id: string }>()
);

export const updateTodoAction = createAction(
  ACTION_TYPES.update,
  props<{ id: string, values: TodoInterface }>()
);

export const completeAllTodoAction = createAction(
  ACTION_TYPES.completeAll
);

export const clearCompletedTodosAction = createAction(
  ACTION_TYPES.clearCompleted
);
