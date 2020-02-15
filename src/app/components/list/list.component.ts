import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoInterface } from '../../interfaces/todo.interface';
import { TodoStateInterface } from '../../interfaces/todo-state.interface';
import { selectAllCompleted, selectVisible } from '../../state/selectors/Todo';
import { onCompleteAll, onRemove, onUpdate } from '../../state/actions/todo.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  visibleTodos$: Observable<TodoInterface[]>;

  allCompleted$: Observable<boolean>;

  constructor(private store: Store<TodoStateInterface>) {
    this.visibleTodos$ = store.select(selectVisible);
    this.allCompleted$ = store.select(selectAllCompleted);
  }

  public handleRemove(id: string) {
    this.store.dispatch(onRemove(id));
  }

  public handleUpdate(values: TodoInterface) {
    this.store.dispatch(onUpdate(values));
  }

  public handleCompleteAll() {
    this.store.dispatch(onCompleteAll());
  }
}
