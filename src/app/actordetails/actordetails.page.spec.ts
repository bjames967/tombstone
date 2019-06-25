import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetailsPage } from './actordetails.page';

describe('ActordetailsPage', () => {
  let component: ActordetailsPage;
  let fixture: ComponentFixture<ActordetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActordetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActordetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
