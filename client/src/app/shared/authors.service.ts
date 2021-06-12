import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { Authors } from './authors.model';

@Injectable({
  providedIn: 'root'
  
})
export class AuthorsService {
   selectedAuthor: Authors;
   authors:Authors[];
  readonly baseURL="http://localhost:3000/author";
   
  // books:Book[];
  constructor( private http: HttpClient) { }
  postBook(author: Authors){
      return this.http.post(this.baseURL,author)
  }
getAuthorList(){
  return this.http.get(this.baseURL);

}
}
