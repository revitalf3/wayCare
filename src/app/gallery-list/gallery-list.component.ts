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
import {GalleryService} from '../gallery/gallery.service';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],

})
export class GalleryListComponent implements OnInit, OnChanges {
  @Input() images: Image[];
  @Output() selectedImage: EventEmitter<any> = new EventEmitter<any>();


  constructor(private galleryService: GalleryService) {
  }


  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.images.currentValue) {

      const favorites = this.galleryService.getFavorites();
      favorites.forEach(fav => {
        this.images.find(x => x.id === fav).favorite = true;
      });
    }
  }
  filterItems(favorites: Image[]) {
    if (!favorites) {  return; }
    return favorites.filter(x => x.favorite);
  }

  imageClicked($event, img) {
    if ($event.detail === 3) {
      img.favorite = true;
      const favorites = this.images.filter(image => image.favorite).map(x => x.id);
      this.galleryService.saveFavorites(favorites);

    }
    this.selectedImage.emit(img);
  }

  remove(img) {
    img.favorite = false;
    const favorites = this.images.filter(image => image.favorite).map(x => x.id);
    this.galleryService.saveFavorites(favorites);
  }


}
