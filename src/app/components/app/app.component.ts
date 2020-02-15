import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoStorageService } from '../../services/todo-storage.service';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../interfaces/todo.interface';
import { TodoStateInterface } from '../../interfaces/todo-state.interface';
import { onLoad } from '../../state/actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  todos$: Observable<TodoInterface[]>;

  constructor(private store: Store<TodoStateInterface>, private storage: TodoStorageService) {
    this.todos$ = this.store.select('todos');
  }

  ngOnInit() {
    this.store.dispatch(onLoad(
      this.storage.loadTodos()
    ));
    this.todos$.subscribe(todos => this.storage.storeTodos(todos));
  }
}
