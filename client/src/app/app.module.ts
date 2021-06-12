import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksService } from './books.service';
import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { ContactComponent } from './component/contact/contact.component';

import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';

import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { NewBookComponent } from './component/new-book/new-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { BookComponent } from './component/book/book.component';
import { BookService } from './shared/book.service';
import { NewAuthorComponent } from './new-author/new-author.component';
import {EditAuthorComponent} from './component/edit-author/edit-author.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BookListComponent,
    NewBookComponent,
    EditBookComponent,
    BookComponent,
    NewAuthorComponent,
    EditAuthorComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [AuthService,AuthGuard,BooksService,BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
