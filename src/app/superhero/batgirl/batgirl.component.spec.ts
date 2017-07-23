import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatgirlComponent } from './batgirl.component';

describe('BatgirlComponent', () => {
  let component: BatgirlComponent;
  let fixture: ComponentFixture<BatgirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatgirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatgirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
