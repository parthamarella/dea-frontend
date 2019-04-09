import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChooserPage } from './state-chooser.page';

describe('StateChooserPage', () => {
  let component: StateChooserPage;
  let fixture: ComponentFixture<StateChooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
