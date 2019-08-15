import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http';
import {GalleryListComponent} from './gallery-list/gallery-list.component';
import {PreviewComponent} from './preview/preview.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material';
import {ImageComponent} from './image/image.component';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
