import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPagePage } from './sort-page.page';

describe('SortPagePage', () => {
  let component: SortPagePage;
  let fixture: ComponentFixture<SortPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
