import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin = false
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  signIn(credentials: string) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result) {
          //this.router.navigate(['/']);
          this.authService.isLoggedIn = true;
          this.userService.setUser();
          this.router.navigate(['home'], { });
        }
        else  {
          this.invalidLogin = true; 
        }
      });
  }

}
