import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, public userService: UserService) { }
  
  loggedIn: boolean = this.authService.islogged()!;
  insideRoom: boolean= this.userService.user.inside

  saveInside(){
    this.insideRoom = !this.insideRoom
    this.userService.user.inside = this.insideRoom;
    this.userService.updateUserInside();
  }
}
