import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsPage } from './moviedetails.page';

describe('MoviedetailsPage', () => {
  let component: MoviedetailsPage;
  let fixture: ComponentFixture<MoviedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
