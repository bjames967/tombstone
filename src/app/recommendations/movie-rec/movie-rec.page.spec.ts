import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecPage } from './movie-rec.page';

describe('MovieRecPage', () => {
  let component: MovieRecPage;
  let fixture: ComponentFixture<MovieRecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
