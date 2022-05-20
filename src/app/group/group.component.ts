import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  {

  headers = ["Firstname", "Lastname", "Service number", "Room", "Inside"];
  fields = ["firstname", "lastname", "service_number", "room"]; // Inside is not in it so it's easier to apply a style based on value
  students :any 

  constructor(private groupService: GroupService, private userService: UserService) { 
    groupService.getGroup(userService.user.prom_name).subscribe((data: any) =>
    {
      this.students = data.users;
      console.log(this.students);
    }
    )
  }

}

