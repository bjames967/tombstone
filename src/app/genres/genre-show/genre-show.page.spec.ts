import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreShowPage } from './genre-show.page';

describe('GenreShowPage', () => {
  let component: GenreShowPage;
  let fixture: ComponentFixture<GenreShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
