import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriceComponent } from './drice.component';

describe('DriceComponent', () => {
  let component: DriceComponent;
  let fixture: ComponentFixture<DriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
