import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Image} from '../gallery/Image';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  @Output() imageClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() imageRemove: EventEmitter<any> = new EventEmitter<any>();
  @Input() isTypeFav: boolean;
  public itemClass: Image;
  @ViewChild('ref', {static: true}) imageRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
    fromEvent(this.imageRef.nativeElement, 'mouseenter')
      .subscribe(item => console.log('hovered: ', item));

  }

  onImageClicked($event, img) {
    this.itemClass = img;
    this.imageClicked.emit($event);
  }

  remove($event) {
    this.imageRemove.emit($event);
  }
}
