import { Injectable } from '@angular/core';
import { RootState } from '../reducers/todo.reducer';
import { Store } from '@ngrx/store';
import {
  loadTodosAction,
  createTodoAction,
  removeTodoAction,
  updateTodoAction,
  clearCompletedTodosAction,
  completeAllTodoAction
} from '../actions/todo.actions';
import { TodoInterface } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoActionService {
  constructor(private store: Store<RootState>) {}

  public onLoad(todos: TodoInterface[]) {
    this.store.dispatch(loadTodosAction({ todos }));
  }

  public onCreate(name: string) {
    this.store.dispatch(createTodoAction({ name }));
  }

  public onRemove(id: string) {
    this.store.dispatch(removeTodoAction({ id }));
  }

  public onUpdate(id: string, values: TodoInterface) {
    this.store.dispatch(updateTodoAction({ id, values }));
  }

  public onCompleteAll() {
    this.store.dispatch(completeAllTodoAction());
  }

  public onClearCompleted() {
    this.store.dispatch(clearCompletedTodosAction());
  }
}
