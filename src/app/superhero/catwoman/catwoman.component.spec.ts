import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatwomanComponent } from './catwoman.component';

describe('CatwomanComponent', () => {
  let component: CatwomanComponent;
  let fixture: ComponentFixture<CatwomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatwomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatwomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
