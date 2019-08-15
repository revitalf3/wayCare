import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GalleryService} from './gallery.service';
import {of} from 'rxjs';
import {getImagesMock} from './Images.mock';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let galleryServiceStub: jasmine.SpyObj<GalleryService>;

  beforeEach(async(() => {

    galleryServiceStub = jasmine.createSpyObj('ContactsComponent', ['getAllImages']);
    galleryServiceStub.getAllImages.and.returnValue(of(getImagesMock()));

    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      providers: [
        { provide: GalleryService, useValue: galleryServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
