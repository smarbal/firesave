import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin = false
  constructor(private authService: AuthService, private router: Router) { }

  signIn(credentials: string) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result) {
          //this.router.navigate(['/']);
          this.router.navigate(['home'], { });
          this.authService.isLoggedIn = true
        }
        else  {
          this.invalidLogin = true; 
        }
      });
  }

}
