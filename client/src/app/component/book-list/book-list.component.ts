import { Component, OnInit } from '@angular/core';
import { BookModel } from  './book.model';
import { BooksService } from '../../books.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   title:String = "Book List";
  books:BookModel[];
  imageWidth: number=100;
  imageMargin: number=20;
  showImage: boolean = false;
   constructor(private booksService:BooksService,private router:Router,public _authService:AuthService){

   }
   toggleImage(): void{
     this.showImage = !this.showImage;
   }
   
   edit(book){
    this.booksService.setter(book);
     console.log('function called')
     this.router.navigate(['/edit-book'])
   }
 
   delete(book){
     this.booksService.delete(book)
     location.reload();
     
   } 

  ngOnInit(): void {
    this.booksService.getBooks()
    .subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status==500){this.router.navigate(['/login'])}
       }
    }
    )
  }
}

