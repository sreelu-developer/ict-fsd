import { Component, OnInit } from '@angular/core';
import { AuthorModel } from  './author.model';
import { BooksService } from '../../books.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth.service';

declare var M: any;
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String = "Authors List";
  authors:AuthorModel[];
  imageWidth: number=100;
  imageMargin: number=20;
  showImage: boolean = false;

  constructor(private booksService:BooksService,private router:Router,public _authService:AuthService) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  
  editAuthor(author){
   this.booksService.setterauth(author);
    console.log('function called')
    this.router.navigate(['/edit-author'])
  }

  deleteauth(author){
    this.booksService.deleteauth(author)
    location.reload();
    
  }

  ngOnInit(): void {
    this.booksService.getAuthors()
    .subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    },
    (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status==500){this.router.navigate(['/login'])}
       }
    }
    )
  }
    
}
