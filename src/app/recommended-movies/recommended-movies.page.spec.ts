import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedMoviesPage } from './recommended-movies.page';

describe('RecommendedMoviesPage', () => {
  let component: RecommendedMoviesPage;
  let fixture: ComponentFixture<RecommendedMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedMoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
