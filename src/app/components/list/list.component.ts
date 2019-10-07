import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo.interface';
import { TodoActionService } from '../../services/todo-action.service';
import { TodoUpdateInterface } from '../../interfaces/todo-update.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  todos: TodoInterface[] = [];

  constructor(private action: TodoActionService) {}

  public handleRemove(id: string) {
    this.action.onRemove(id);
  }

  public handleUpdate(event: TodoUpdateInterface) {
    this.action.onUpdate(event.id, event.values);
  }

  public handleCompleteAll() {
    this.action.onCompleteAll();
  }

  public areAllCompleted() {
    return this.todos.length && this.todos.every(todo => todo.completed);
  }
}
