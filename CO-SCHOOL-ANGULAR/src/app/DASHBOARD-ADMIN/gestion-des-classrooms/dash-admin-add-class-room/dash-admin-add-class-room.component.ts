import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { classeGroupService } from 'src/app/Services/classe-group.service';

@Component({
  selector: 'app-dash-admin-add-class-room',
  templateUrl: './dash-admin-add-class-room.component.html',
  styleUrls: ['./dash-admin-add-class-room.component.css']
})
export class DashAdminAddClassRoomComponent implements OnInit{

  FormClasseGroup !:FormGroup;

  constructor(private fb: FormBuilder, private classeGroupService : classeGroupService) { }
  ngOnInit(): void {
    this.FormClasseGroup = this.fb.group({
      class_room_name : ['',Validators.required]
    })
  }

  insert(){
    if(this.FormClasseGroup.valid){
      const newClasse  : ClasseGroup  = {
        id: 0,
        class_room_name: this.FormClasseGroup.value.class_room_name,
        school_name: '',
        eleves: [],
        professeurs: []
      }
      this.classeGroupService.insertClasseGroup(newClasse).subscribe(() => {
          alert("Classe group ajouté avec succès");
        },
      )
    }
    this.FormClasseGroup = this.fb.group({
      class_room_name : ['',Validators.required]
    })
  }

}
