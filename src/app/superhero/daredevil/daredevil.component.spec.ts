import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaredevilComponent } from './daredevil.component';

describe('DaredevilComponent', () => {
  let component: DaredevilComponent;
  let fixture: ComponentFixture<DaredevilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaredevilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaredevilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
