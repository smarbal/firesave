import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  api = "/api/"   //http://smarbal.xyz:8000/api/
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                              .set('x-access-token',this.authService.token! )
  };

  constructor(private http: HttpClient, private authService: AuthService) { 

  }

  getProms(){
    return this.http.get(this.api + 'prom/?token='+this.authService.token, this.options)
  }

  removeProm(prom_name: string){  
      return this.http.delete(this.api + 'prom/' + prom_name, this.options)
    }
  
  addProm(prom_name: string, battalion: string){
    console.log(prom_name)
    const payload = new URLSearchParams();
    payload.set('prom_name', prom_name);
    payload.set('battalion', battalion);

    return this.http.post(this.api + 'prom', payload, this.options).pipe(
      map((res: any) => {
        if (res ) {
          return res
        }
      }));
  }

  
}
