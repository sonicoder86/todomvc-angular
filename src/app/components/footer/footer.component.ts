import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCompletedCount, selectItemsLeft } from '../../state/selectors/Todo';
import { FILTERS } from '../../constants/Filters';
import { TodoStateInterface } from '../../interfaces/todo-state.interface';
import { onClearCompleted } from '../../state/actions/todo.actions';
import { onFilterSelect } from '../../state/actions/filter.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  filterTitles = [
    { key: FILTERS.all, value: 'All' },
    { key: FILTERS.active, value: 'Active' },
    { key: FILTERS.completed, value: 'Completed' }
  ];

  itemsLeft$: Observable<number>;

  completedCount$: Observable<number>;

  itemText$: Observable<string>;

  filter$: Observable<string>;

  constructor(private store: Store<TodoStateInterface>) {
    this.itemsLeft$ = store.select(selectItemsLeft);
    this.completedCount$ = store.select(selectCompletedCount);
    this.itemText$ = store.select(
      (state: TodoStateInterface) => selectItemsLeft(state) === 1 ? 'item' : 'items'
    );
    this.filter$ = store.select('filter');
  }

  handleClearCompleted() {
    this.store.dispatch(onClearCompleted());
  }

  handleFilterSelect(filter: string) {
    this.store.dispatch(onFilterSelect(filter));
  }
}
