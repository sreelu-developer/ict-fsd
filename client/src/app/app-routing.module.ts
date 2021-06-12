import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

import { ContactComponent } from './component/contact/contact.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { LoginComponent} from './component/login/login.component';
import{ RegisterComponent} from './component/register/register.component';
import { HomeComponent} from './component/home/home.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { NewBookComponent } from './component/new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './component/edit-author/edit-author.component'

import{ BookComponent} from './component/book/book.component';

const routes: Routes = [
  { path:'contact' ,component:ContactComponent},
  { path:'login' ,component:LoginComponent},
  { path:'register' ,component:RegisterComponent},
  { path:'home' ,component:HomeComponent},
  {path:'edit-book',component:EditBookComponent,canActivate: [AuthGuard]},
  {path:'book-list',component:BookListComponent,canActivate: [AuthGuard]},
  {path:'add-book',component:NewBookComponent,canActivate: [AuthGuard]},
  {path:'add-author',component:NewAuthorComponent,canActivate: [AuthGuard]},
  {path:'edit-author',component:EditAuthorComponent,canActivate: [AuthGuard]},
  {path:'authors',component:BookComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
