import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  
  constructor(private http: HttpClient) { }

  user = JSON.parse(localStorage.getItem('user')!);
  api = "http://localhost:8000/api/"   //http://smarbal.xyz:8000/api/

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  saveUser(){
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  
  updateUserInside() {
    this.saveUser();

    const payload = new URLSearchParams();
    payload.set('inside', this.user.inside);

    console.log(this.api + 'inside/' + this.user.service_number)

    this.http.put(this.api + 'inside/' + this.user.service_number, payload, this.options).subscribe(data => console.log(data))

  }
}
