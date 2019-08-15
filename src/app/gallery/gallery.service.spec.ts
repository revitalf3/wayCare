import { TestBed } from '@angular/core/testing';

import { GalleryService } from './gallery.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {getImagesMock} from './Images.mock';

describe('ContactsService', () => {
  let service: GalleryService;
  let httpClientStub: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientStub = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    httpClientStub.get.and.returnValue(of({ folders: getImagesMock() }));


    TestBed.configureTestingModule({
      providers: [GalleryService,
        { provide: HttpClient, useValue: httpClientStub }]
    });

    service = TestBed.get(GalleryService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllImages', () => {
    it('should call getAllImages', () => {
      service.getAllImages();
      expect(httpClientStub.get).toHaveBeenCalledWith(
        'https://picsum.photos/v2/list?page=1&limit=1000'
      );
    });
  });
});


