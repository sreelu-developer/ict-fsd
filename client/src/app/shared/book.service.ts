import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { Books } from './books.model';

@Injectable({
  providedIn: 'root'
  
})
export class BookService {
   selectedBook: Books;
   books:Books[];
  readonly baseURL="http://localhost:3000/book";
   
  // books:Book[];
  constructor( private http: HttpClient) { }
  postBook(book: Books){
      return this.http.post(this.baseURL,book)
  }
getBookList(){
  return this.http.get(this.baseURL);

}
}
