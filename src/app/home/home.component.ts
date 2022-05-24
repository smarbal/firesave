import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, public userService: UserService, private socket: Socket) { }
  
  loggedIn: boolean = this.authService.islogged()!;
  insideRoom: boolean= this.userService.user.inside
  showAlertValidation = false 
  user = this.userService.user
  
  saveInside(){
    this.insideRoom = !this.insideRoom
    this.userService.user.inside = this.insideRoom;
    this.userService.updateUserInside();
  }
  alert(){
    this.socket.emit('alert', 'alert');
  }
}
