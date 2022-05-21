import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firesave';
 
  isLoggedIn  = this.authService.isLoggedIn
  alert: boolean
  user: any 

  constructor(private router: Router,private authService: AuthService, private socket: Socket, private userService: UserService) { 
    this.alert = false
    this.user =this.userService.user
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedIn = this.authService.isLoggedIn;
      }
    })
    this.socket.on('alert', () => {
      this.alert = true;
      var that = this; // you store the reference to a `this` in `that` variable, so you could use it in a callback function. You have to do that because it has its own `this` defined
      setTimeout(function() {
          that.alert = false;
      }, 800 * 1000); //Wait 800s 
      });
      
  }

  logout(){
    this.authService.logout()
  }
}
