import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoInterface } from '../../services/todo.interface';
import { TodoStateInterface } from '../../store/todo-state.interface';
import { selectAllCompleted, selectVisible } from '../../store/selectors/todo.selector';
import { onCompleteAll, onRemove, onUpdate } from '../../store/actions/todo.action';

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
