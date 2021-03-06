import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyborgComponent } from './cyborg.component';

describe('CyborgComponent', () => {
  let component: CyborgComponent;
  let fixture: ComponentFixture<CyborgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyborgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyborgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
