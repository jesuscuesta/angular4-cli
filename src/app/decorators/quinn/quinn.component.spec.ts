import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinnComponent } from './quinn.component';

describe('JokerComponent', () => {
  let component: QuinnComponent;
  let fixture: ComponentFixture<QuinnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
