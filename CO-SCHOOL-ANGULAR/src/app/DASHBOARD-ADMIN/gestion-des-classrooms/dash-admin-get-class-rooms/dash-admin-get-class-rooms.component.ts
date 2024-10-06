import { Component, OnInit } from '@angular/core';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { classeGroupService } from 'src/app/Services/classe-group.service';

@Component({
  selector: 'app-dash-admin-get-class-rooms',
  templateUrl: './dash-admin-get-class-rooms.component.html',
  styleUrls: ['./dash-admin-get-class-rooms.component.css']
})
export class DashAdminGetClassRoomsComponent implements OnInit{
  displayedColumns: string[] = ['id' , 'class-room', 'school_name'];
  ListClasseGroup !: ClasseGroup[];
  constructor( private classeGroupService : classeGroupService){}

  ngOnInit(): void {
    this.classeGroupService.getAllClasseGroup().subscribe(data =>{
      this.ListClasseGroup = data;
      console.log(data[0].class_room_name + "------");
    })
  }

}
