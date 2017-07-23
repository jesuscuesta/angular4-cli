import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderwomanComponent } from './wonderwoman.component';

describe('WonderwomanComponent', () => {
  let component: WonderwomanComponent;
  let fixture: ComponentFixture<WonderwomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderwomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderwomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
