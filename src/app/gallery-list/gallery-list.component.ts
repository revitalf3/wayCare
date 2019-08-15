import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnInit
} from '@angular/core';
import {Image} from '../gallery/Image';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],

})
export class GalleryListComponent implements OnInit, OnChanges {
  @Input() images: Image[];
  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }


  ngOnInit() {}

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
    this.selectedImage.emit(img);
  }

  remove(img) {
    img.favorite = false;
  }


}
