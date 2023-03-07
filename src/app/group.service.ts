import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  api = "/api/"   //http://smarbal.xyz:8000/api/
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  prom = this.userService.user.prom_name
  
  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }

  getGroup(prom_name: string) {
    return this.http.get(this.api + 'prom/find/' + prom_name, this.options)
  }
  removeUser(service_number: any){
    const payload = new URLSearchParams();
    payload.set("token", this.authService.token!)
    payload.set("service_number", service_number)

    return this.http.put(this.api + 'promRemove/' + this.prom, payload, this.options)
  }
  addUser(service_number: any){
    const payload = new URLSearchParams();
    payload.set("token", this.authService.token!)
    payload.set("service_number", service_number)

    return this.http.put(this.api + 'promAdd/' + this.prom, payload, this.options)
  }
}

