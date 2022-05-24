import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent  {

  invalidRegister = false

  constructor(private authService: AuthService, private router: Router) { }
  
  register(data: any){
    this.authService.register(data)
    .subscribe(result => { 
      if (result){
        console.log("Registered");
        this.router.navigate(['/login']);
      }
      else{
        console.log("Can't  register")
        this.invalidRegister = true; 
      }
    });
  }

  

}
