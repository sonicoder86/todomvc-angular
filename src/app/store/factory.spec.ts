import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { storeFactory } from './factory';
import { TodoStateInterface } from '../interfaces/todo-state.interface';
import { onCreate } from './actions/todo.actions';

describe('storeFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(storeFactory())
      ]
    });
  });

  it('should create a new instance of store', () => {
    const store: Store<TodoStateInterface> = TestBed.inject(Store);

    store.dispatch(onCreate('Demo'));

    const expectedTodos = cold('a', { a: [{ id: jasmine.any(String),  name: 'Demo', completed: false }] });
    expect(store.select('todos')).toBeObservable(expectedTodos);
  });
});
