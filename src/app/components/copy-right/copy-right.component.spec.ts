import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CopyRightComponent } from './copy-right.component';

describe('CopyRightComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CopyRightComponent]
    })
    .compileComponents();
  }));

  it('should render component', () => {
    const fixture: ComponentFixture<CopyRightComponent> = TestBed.createComponent(CopyRightComponent);

    const info = fixture.nativeElement.querySelector('.info');
    expect(info.textContent).toContain('Double-click to edit a todo');
  });
});
