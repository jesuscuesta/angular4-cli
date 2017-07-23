import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerComponent } from './joker.component';

describe('JokerComponent', () => {
  let component: JokerComponent;
  let fixture: ComponentFixture<JokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
