import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  {

  headers = ["Firstname", "Lastname", "Service number", "Room", "Inside"];  // Titles of the table
  fields = ["firstname", "lastname", "service_number", "room"]; // Inside is not in it because it's easier to apply a style based on value
  students :any 
  isManager :boolean = false;
  editMode: boolean = false
  prom = this.groupService.prom


  constructor(private groupService: GroupService, private userService: UserService) { 
    groupService.getGroup(userService.user.prom_name).subscribe((data: any) =>
    {
      this.students = data.users;
      this.isManager = data.manager.find((e: { service_number: any; }) => {
        if (e.service_number === userService.user.service_number) {
          return true;
        }
        return false;});
      console.log(data);
    }
    )
  }

  
  changeEdit(){
    this.editMode = !this.editMode
  }
  removeUser(service_number: any){
    console.log(service_number)
    this.groupService.removeUser(service_number)
    .subscribe((data)=>{
      console.log(data)
      const removeIndex = this.students.findIndex( (item: { service_number: any; })=> item.service_number === service_number );
      this.students.splice( removeIndex, 1 );
    })
  }
  
  addUser(service_number: any){
    console.log(service_number)
    this.groupService.addUser(service_number)
    .subscribe((data)=>{
      this.groupService.getGroup(this.userService.user.prom_name).subscribe((data: any) =>     //Sequelize doesn'returns the added User so we must fetch it manually
    {
      this.students = data.users;
      console.log(this.students);
    }
    )
    })
  }
}

