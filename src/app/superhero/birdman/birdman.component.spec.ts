import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdmanComponent } from './birdman.component';

describe('BirdmanComponent', () => {
  let component: BirdmanComponent;
  let fixture: ComponentFixture<BirdmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
