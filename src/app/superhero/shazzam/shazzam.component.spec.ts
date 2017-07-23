import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShazzamComponent } from './shazzam.component';

describe('ShazzamComponent', () => {
  let component: ShazzamComponent;
  let fixture: ComponentFixture<ShazzamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShazzamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShazzamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
