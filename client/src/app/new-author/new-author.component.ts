import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Router } from '@angular/router';
import { AuthorModel } from '../../app/component/book/author.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  title:String = "Add Author";

  constructor(private booksService: BooksService, private router:Router) { }
  AuthorItem = new AuthorModel(null,null,null,null);

  ngOnInit(): void {
  }

  AddAuthor()
  {
    this.booksService.newAuthor(this.AuthorItem)
    console.log("Called");
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
