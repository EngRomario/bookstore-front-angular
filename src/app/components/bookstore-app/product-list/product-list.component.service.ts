import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {
  private url = '../../../../assets/books_dataset.json';

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.url);
  }
}
