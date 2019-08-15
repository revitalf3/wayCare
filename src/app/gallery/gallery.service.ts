import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from './Image';

const API = 'https://picsum.photos/v2/list?page=1&limit=1000';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) {
  }


  getAllImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>(API);
  }

  saveFavorites(ids: string[]): void {
    localStorage.setItem('favorites', JSON.stringify(ids));
  }

  getFavorites(): string[] {
    return localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];
  }
}
