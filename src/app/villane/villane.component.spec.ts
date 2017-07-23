import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaneComponent } from './villane.component';

describe('VillaneComponent', () => {
  let component: VillaneComponent;
  let fixture: ComponentFixture<VillaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
