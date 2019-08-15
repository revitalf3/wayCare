import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleryListComponent} from './gallery-list/gallery-list.component';
import {PreviewComponent} from './preview/preview.component';
import {ImageComponent} from './image/image.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatIconModule, MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GalleryComponent,
        GalleryListComponent,
        PreviewComponent,
        ImageComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ScrollingModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatProgressSpinnerModule,

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
