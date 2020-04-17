import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TodoInterface } from '../../services/todo.interface';

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
  update = new EventEmitter<TodoInterface>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todo) {
      this.name = changes.todo.currentValue.name;
    }
  }

  handleRemove() {
    this.remove.emit(this.todo.id);
  }

  handleBlur() {
    this.update.emit({ id: this.todo.id, name: this.name });
    this.editing = false;
  }

  handleEdit() {
    this.editing = true;
  }

  handleCompleted() {
    this.update.emit({ id: this.todo.id, completed: !this.todo.completed });
  }
}
