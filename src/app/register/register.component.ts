import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent  {
  invalidRegister = false

  constructor(private authService: AuthService) { }
  
  register(data: any){
    this.authService.register(data)
    .subscribe(result => { 
      if (result)
        console.log("Registered")
      else  
        this.invalidRegister = true; 
    });
  }

  

}
