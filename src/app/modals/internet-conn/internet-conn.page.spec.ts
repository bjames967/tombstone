import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetConnPage } from './internet-conn.page';

describe('InternetConnPage', () => {
  let component: InternetConnPage;
  let fixture: ComponentFixture<InternetConnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetConnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetConnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
