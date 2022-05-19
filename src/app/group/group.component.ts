import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  {

  headers = ["Firstname", "Lastname", "Service number", "Room", "Inside"];
  fields = ["firstname", "lastname", "service_number", "room"]; // Inside is not in it so it's easier to apply a style based on value
  students :any = [{
    "service_number": 10,
    "lastname": "a",
    "firstname": "a",
    "username": "wiener",
    "room": "1a",
    "inside": true,
    "password": "$2b$05$BYQZD46gDBarkGN1LeJDwu6JfN0Co0yseXjLdYiHA4fcjuiI3Fr0K",
    "prom_name": "SDIV"
}, {
  "service_number": 10,
  "lastname": "a",
  "firstname": "a",
  "username": "wiener",
  "room": "1a",
  "inside": true,
  "password": "$2b$05$BYQZD46gDBarkGN1LeJDwu6JfN0Co0yseXjLdYiHA4fcjuiI3Fr0K",
  "prom_name": "SDIV"
}]


  constructor() { }

}

