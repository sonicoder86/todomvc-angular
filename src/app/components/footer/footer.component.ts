import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo.interface';
import { selectCompleted, selectNotCompleted } from '../../selectors/Todo';
import { TodoActionService } from '../../services/todo-action.service';
import { FILTERS } from '../../constants/Filters';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  @Input()
  todos: TodoInterface[] = [];

  filterTitles = {
    [FILTERS.all]: 'All',
    [FILTERS.active]: 'Active',
    [FILTERS.completed]: 'Completed'
  };

  constructor(private action: TodoActionService) {}

  public itemsLeft() {
    return selectNotCompleted(this.todos).length;
  }

  public completedCount() {
    return selectCompleted(this.todos).length;
  }

  public itemText() {
    return this.itemsLeft() === 1 ? 'item' : 'items';
  }

  public handleClearCompleted() {
    this.action.onClearCompleted();
  }

  handleFilterSelect(filter: string) {
    console.log(filter);
  }

  public keepOriginalOrder = (a, b) => a.key;
}
