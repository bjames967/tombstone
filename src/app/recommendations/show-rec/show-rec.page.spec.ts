import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecPage } from './show-rec.page';

describe('ShowRecPage', () => {
  let component: ShowRecPage;
  let fixture: ComponentFixture<ShowRecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
