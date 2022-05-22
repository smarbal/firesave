import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  isLoggedIn: boolean;
  token = localStorage.getItem('token')
  jwt = new JwtHelperService();
  api = "http://localhost:8000/api/"   //http://smarbal.xyz:8000/api/
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient, private router: Router) { 
    this.isLoggedIn = localStorage.hasOwnProperty('token')
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}


  islogged(){
    return localStorage.hasOwnProperty('token')
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
          this.token = res.token
          localStorage.setItem('user', JSON.stringify(res.user));
          return true
        }
        else throw Error; 
      }));
}
        

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.isLoggedIn = false
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

