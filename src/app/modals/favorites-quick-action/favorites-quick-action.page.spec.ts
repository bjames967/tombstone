import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesQuickActionPage } from './favorites-quick-action.page';

describe('FavoritesQuickActionPage', () => {
  let component: FavoritesQuickActionPage;
  let fixture: ComponentFixture<FavoritesQuickActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesQuickActionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesQuickActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
