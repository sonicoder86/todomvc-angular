import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../reducers/todo.reducer';
import { TodoActionService } from '../../services/todo-action.service';
import { TodoStorageService } from '../../services/todo-storage.service';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  todos$: Observable<TodoInterface[]>;

  constructor(private store: Store<RootState>, private action: TodoActionService, private storage: TodoStorageService) {
    this.todos$ = this.store.pipe(
      select('todos')
    );
  }

  ngOnInit() {
    this.action.onLoad(
      this.storage.loadTodos()
    );
  }
}
