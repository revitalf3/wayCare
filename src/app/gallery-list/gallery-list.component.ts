import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Image} from '../gallery/Image';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  @Input() images: Image[];
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.images.currentValue) {

      const favorites = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];
      favorites.forEach(fav => {
        this.images.find(x => x.id === fav).favorite = true;
      });
    }
  }

  imageClicked($event, img) {
    if ($event.detail === 3) {
      img.favorite = true;
      const favorites = this.images.filter(image => image.favorite).map(x => x.id);
      console.log('favorites ', favorites);
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }
    this.itemClass = img;
    this.selectedImage.emit(img);
  }

  remove(img) {
    img.favorite = false;
  }


}
