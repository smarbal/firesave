import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {


  invalidRegister = false

  constructor(private authService: AuthService, private userService: UserService) { }
  
  user = this.userService.user
  update(data: any){
    this.userService.update(data)
    .subscribe(result => { 
      if (result){
        this.userService.saveUser()
      }
      else  
        this.invalidRegister = true; 
    });
  }
  deleteUser(){
    this.userService.deleteUser().subscribe(
      ()  => {
        this.authService.logout()
      }
    )
  }

}
