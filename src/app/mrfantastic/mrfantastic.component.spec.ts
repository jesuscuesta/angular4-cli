/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MrfantasticComponent } from './mrfantastic.component';

describe('MrfantasticComponent', () => {
  let component: MrfantasticComponent;
  let fixture: ComponentFixture<MrfantasticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrfantasticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrfantasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
