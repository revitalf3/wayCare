import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListComponent } from './gallery-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GalleryListComponent', () => {
  let component: GalleryListComponent;
  let fixture: ComponentFixture<GalleryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
