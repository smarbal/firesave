import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  headers = ["Firstname", "Lastname", "Service number", "Room", "Inside"];  // Titles of the table
  fields = ["firstname", "lastname", "service_number", "room"]; // Inside is not in it because it's easier to apply a style based on value
  proms: any
  editMode: boolean = false
  selected: any 
  constructor( private userService: UserService, private adminService: AdminService) { 

    adminService.getProms().subscribe((data: any) =>
    {
      this.proms = data;
    }
    )
  }

  changeEdit(){
    this.editMode = !this.editMode
  }
  
  removeProm(prom_name: any){
    this.adminService.removeProm(prom_name)
    .subscribe((data)=>{
      const removeIndex = this.proms.findIndex( (item: { prom_name: any; })=> item.prom_name === prom_name );
      this.proms.splice( removeIndex, 1 );
    })
  }

  addProm(input: any){
    this.adminService.addProm(input.name, input.battalion)
    .subscribe((data)=>{
    this.proms.push({'prom_name':input.name, 'battalion': input.battalion})      
    })
  }

}
