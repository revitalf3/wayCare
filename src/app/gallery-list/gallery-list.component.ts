import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../gallery/Image';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  @Input() images: Image[];
  @Input() imagesFavorite: Image[];
  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();
  public itemClass: Image;

  // @ViewChildren('imgs', {static: true}) imagesRef: ElementRef;

  constructor() {
  }

  ngOnInit() {

    // this.imagesRef.forEach((img: ElementRef) => {
    //   fromEvent(img.nativeElement, 'mouseenter')
    //     .subscribe(item => console.log('hovered: ', item));
    // });


  }

  imageClicked(img) {
    this.itemClass = img;
    this.selectedImage.emit(img);
  }

}
