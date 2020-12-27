import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { cold } from 'jasmine-marbles';
import { HeaderComponent } from './header.component';
import { createStore } from '../../store/index';

describe('HeaderComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [StoreModule.forRoot(createStore())]
    }).compileComponents();
  }));

  it('should add new element to store', () => {
    const fixture: ComponentFixture<HeaderComponent> = TestBed.createComponent(HeaderComponent);

    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'Demo';
    input.triggerEventHandler('input', { target: input.nativeElement });
    input.triggerEventHandler('keyup', { key: 'Enter' });

    const expectedTodos = cold('a', { a: [{ id: jasmine.any(String), name: 'Demo', completed: false }] });
    const store = TestBed.inject(Store);
    expect(store.select('todos')).toBeObservable(expectedTodos);
  });
});
