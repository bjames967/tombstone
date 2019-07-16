import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSelectPage } from './genre-select.page';

describe('GenreSelectPage', () => {
  let component: GenreSelectPage;
  let fixture: ComponentFixture<GenreSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
