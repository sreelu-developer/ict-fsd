import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../app/component/book-list/book.model';
import { AuthorModel } from '../app/component/book/author.model';

import {AuthService} from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
   private book:BookModel;
   private author:AuthorModel;


  constructor(private http:HttpClient, private authService:AuthService) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }

  newBook(item){
    return this.http.post("http://localhost:3000/insert",{"book":item})
    .subscribe(data=>{console.log(data)})
  }
  newAuthor(item){
    return this.http.post("http://localhost:3000/insertauth",{"author":item})
    .subscribe(data=>{console.log(data)})
  }

  editBook(item)
  {
    return this.http.post("http://localhost:3000/edit",{"book":item})
    .subscribe(data=>{console.log(data)})

  }
  editAuthor(item)
  {
    return this.http.post("http://localhost:3000/editauth",{"author":item})
    .subscribe(data=>{console.log(data)})

  }

  setter(book){
    console.log("settercalled")

    this.book=book;
    console.log(book);
  }
  setterauth(author){
    console.log("settercalled")

    this.author=author;
    console.log(author);
  }

  hi(){
    return this.book;
  }
  hii(){
    return this.author;
  }

  delete(book){
    console.log("delete clicked")
    return this.http.post("http://localhost:3000/delete",{"book":book})
    .subscribe(data=>{console.log(data)})
   
  }
  deleteauth(author){
    console.log("delete clicked")
    return this.http.post("http://localhost:3000/deleteauth",{"author":author})
    .subscribe(data=>{console.log(data)})
   
  }
}

