import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

const API = 'https://candidate-test.herokuapp.com/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }


  getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(API);
  }
}
