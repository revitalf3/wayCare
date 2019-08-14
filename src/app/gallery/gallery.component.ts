import {Component, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
import {Image} from './Image';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public imagesList: Observable<Image[]>;
  public selectedImage: Image;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.imagesList = this.galleryService.getAllImages();
  }

  onSelectedImage($event) {
    this.selectedImage = $event;
  }



}
