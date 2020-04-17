import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCompletedCount, selectItemsLeft } from '../../store/selectors/todo.selector';
import { FILTERS } from '../../constants/filter';
import { TodoStateInterface } from '../../store/todo-state.interface';
import { onClearCompleted } from '../../store/actions/todo.action';
import { onFilterSelect } from '../../store/actions/filter.action';

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
    this.itemText$ = store.select((state: TodoStateInterface) => (selectItemsLeft(state) === 1 ? 'item' : 'items'));
    this.filter$ = store.select('filter');
  }

  handleClearCompleted() {
    this.store.dispatch(onClearCompleted());
  }

  handleFilterSelect(filter: string) {
    this.store.dispatch(onFilterSelect(filter));
  }
}
