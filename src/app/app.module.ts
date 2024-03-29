import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GroupComponent } from './group/group.component';
import { SettingsComponent } from './settings/settings.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AdminComponent } from './admin/admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 

const config: SocketIoConfig = { url: 'http://smarbal.xyz', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    GroupComponent,
    SettingsComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    MdbCollapseModule,
    MatSelectModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot([
      //{ path: '', component: TravelsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthService] },
      { path: 'group', component: GroupComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthService] },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
      //{ path: 'admin', component: AdminComponent }, 
      //{ path: 'travel/:travel_id/:name', component: TravelComponent }
    ]),
    NoopAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
