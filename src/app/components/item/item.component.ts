import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo.interface';
import { TodoUpdateInterface } from '../../interfaces/todo-update.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnChanges {

  editing = false;

  name = '';

  @Input()
  public todo: TodoInterface;

  @Output()
  remove = new EventEmitter<string>();

  @Output()
  update = new EventEmitter<TodoUpdateInterface>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todo) {
      this.name = changes.todo.currentValue.name;
    }
  }

  handleRemove() {
    this.remove.emit(this.todo.id);
  }

  handleBlur() {
    this.update.emit({ id: this.todo.id, values: { name: this.name } });
    this.editing = false;
  }

  handleEdit() {
    this.editing = true;
  }

  handleCompleted() {
    this.update.emit({ id: this.todo.id, values: { completed: !this.todo.completed } });
  }
}
