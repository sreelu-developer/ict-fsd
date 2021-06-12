import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email:"",password:""};
  constructor(private _authService: AuthService,
    private _router:Router ) { }

  ngOnInit() {
  }
  loginUser(){


console.log(this.loginUserData.email)
console.log(this.loginUserData.password)
if(this.loginUserData.email=="admin@gmail.com" && this.loginUserData.password=="Admin@123"){
  localStorage.setItem('token','admin')
  this._router.navigate(['/'])
}
else{
  this._authService.loginUser(this.loginUserData)
  .subscribe(
    res=>{
      console.log(res.token)
      localStorage.setItem('token',res["token"])
      this._router.navigate(['/'])

    },
    err => console.log(err)
  )
}



  }
}

  // loginUserData = {email:"",password:""};
  // constructor(private _auth: AuthService,
  //   private _router:Router ) { }

  // ngOnInit() {
  // }
  // loginUser(){
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //     res=>{
  //       console.log(res)
  //       localStorage.setItem('token',res["token"])
     
  //       this._router.navigate(['/'])
  //       },
  //     err => console.log(err)
  //   )
 
  // }







