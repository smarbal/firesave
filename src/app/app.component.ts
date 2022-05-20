import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firesave';
 
  isLoggedIn  = this.authService.isLoggedIn

  constructor(private router: Router,private authService: AuthService) { 

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedIn = this.authService.isLoggedIn;
      }
    })
  }

  logout(){
    this.authService.logout()
  }
  refreshPage() {
    window.location.reload();
}
}
