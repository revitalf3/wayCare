import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {GalleryListComponent} from './gallery-list.component';
import {NO_ERRORS_SCHEMA, SimpleChange} from '@angular/core';
import {GalleryService} from '../gallery/gallery.service';
import {getImagesMock} from '../gallery/Images.mock';


describe('GalleryListComponent', () => {
  let component: GalleryListComponent;
  let fixture: ComponentFixture<GalleryListComponent>;
  let galleryServiceStub: jasmine.SpyObj<GalleryService>;
  let simpleChange;

  beforeEach(async(() => {

    galleryServiceStub = jasmine.createSpyObj('ContactsComponent', ['getFavorites', 'saveFavorites']);
    simpleChange = {
      images: new SimpleChange(null, {currentValue: getImagesMock()}, false)};


    TestBed.configureTestingModule({
      declarations: [GalleryListComponent],
      imports: [ScrollingModule],
      providers: [
        {provide: GalleryService, useValue: galleryServiceStub},
      ],
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
