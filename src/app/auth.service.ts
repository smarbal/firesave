import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: any; 
  jwt = new JwtHelperService();
  api = "http://localhost:8000/api/"   //http://smarbal.xyz:8000/api/

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) { 
    let token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwt.decodeToken(token);
    }
  }
// Login with username and password. JWT token is used to id the user. 
  login(credentials: any){
    const payload = new URLSearchParams();
    payload.set('username', credentials.username);
    payload.set('password', credentials.password);

    return this.http.post(this.api + 'login', payload, this.options).pipe(
      map((res: any) => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.currentUser = this.jwt.decodeToken(localStorage.getItem('token')!);
          //console.log(this.currentUser)
          return true
        }
        else throw Error; 
      }));
}
        

  logout() {
    localStorage.removeItem("token");
}

  register(data: any){
    const payload = new URLSearchParams();
    payload.set('username', data.username);
    payload.set('password', data.password);
    payload.set('service_number', data.service_number);
    payload.set('firstname', data.firstname);
    payload.set('lastname', data.lastname);
    payload.set('prom_name', data.prom_name);
    payload.set('room', data.room);

    return this.http.post(this.api + 'register', payload, this.options).pipe(
      map((res: any) => {
        if (res ) {
          return res
        }
      }));

  }
}

