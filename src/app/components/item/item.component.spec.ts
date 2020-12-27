import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent]
    }).compileComponents();
  }));

  it('should display todo item', () => {
    const fixture: ComponentFixture<ItemComponent> = TestBed.createComponent(ItemComponent);

    fixture.componentInstance.todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false };
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('label'));
    expect(label.nativeElement.textContent).toEqual('Demo');
  });

  it('should mark todo item as completed', () => {
    const fixture: ComponentFixture<ItemComponent> = TestBed.createComponent(ItemComponent);

    fixture.componentInstance.todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: true };
    fixture.detectChanges();

    const item = fixture.debugElement.query(By.css('li'));
    expect(item.classes).toEqual({ completed: true });
  });

  it('should notify about remove button', () => {
    const fixture: ComponentFixture<ItemComponent> = TestBed.createComponent(ItemComponent);

    fixture.componentInstance.todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: true };
    fixture.detectChanges();

    let todoId = '';
    const destroy = fixture.debugElement.query(By.css('.destroy'));
    fixture.componentInstance.remove.subscribe(id => (todoId = id));
    destroy.triggerEventHandler('click', null);

    expect(todoId).toEqual('e2bb892a-844a-47fb-a2b3-47f491af9d88');
  });
});
