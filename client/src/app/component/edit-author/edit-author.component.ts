import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../book/author.model';
import { BooksService } from 'src/app/books.service';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorItem = new AuthorModel(null,null,null,null);

  constructor(private booksService:BooksService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.authorItem = this.booksService.hii();
  }

  editAuthor(){
    this.booksService.editAuthor(this.authorItem)
    console.log("hi for, editauthor and the corresponding author name is " + this.authorItem.authorName);
    alert("edited")
    this.router.navigate(['/authors'])
  }

}
