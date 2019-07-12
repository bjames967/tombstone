import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryQuickActionPage } from './library-quick-action.page';

describe('LibraryQuickActionPage', () => {
  let component: LibraryQuickActionPage;
  let fixture: ComponentFixture<LibraryQuickActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryQuickActionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryQuickActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
