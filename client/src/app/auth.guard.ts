import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private _authService:AuthService,
           private _router:Router) {}
           canActivate(): boolean{
             if(this._authService.loggedIn()){
               return true
             }
             else{
               this._router.navigate(['/login'])
               return false
             }

           }

  
}

// canActivate():boolean
// {
//     if (this._authService.loggedInAdmin()) {
//     console.log('true');
//     return true;
//   }
//   else {
//     console.log('you have to be an admin to view this page!!');
//     alert('Admin privileges denied!!')
//     this._router.navigate(['/login']);
//   }
// }

// }



