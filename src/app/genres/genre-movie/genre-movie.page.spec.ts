import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMoviePage } from './genre-movie.page';

describe('GenreMoviePage', () => {
  let component: GenreMoviePage;
  let fixture: ComponentFixture<GenreMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
