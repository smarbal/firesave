import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  api = "http://localhost:8000/api/"   //http://smarbal.xyz:8000/api/
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  
  constructor(private http: HttpClient) { }

  getGroup(prom_name: string) {
    return this.http.get(this.api + 'prom/find/' + prom_name, this.options)
  }
}
