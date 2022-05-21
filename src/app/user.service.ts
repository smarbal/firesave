import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  
  constructor(private http: HttpClient, private authService: AuthService) { }

  user = JSON.parse(localStorage.getItem('user')!);
  api = "http://localhost:8000/api/"   //http://smarbal.xyz:8000/api/

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };


  saveUser(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  setUser(){
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
  
  updateUserInside() {
    this.saveUser();

    const payload = new URLSearchParams();
    payload.set('inside', this.user.inside);

    this.http.put(this.api + 'inside/' + this.user.service_number, payload, this.options).subscribe(data => console.log(data))

  }

  update(data: any){
    const payload = new URLSearchParams();
    payload.set("token", this.authService.token!)
    for (let key in data) {
      payload.set(key, data[key])
      this.user.key = data[key]
    }
    return this.http.put(this.api + 'user/' + this.user.service_number, payload, this.options)
  }
}
