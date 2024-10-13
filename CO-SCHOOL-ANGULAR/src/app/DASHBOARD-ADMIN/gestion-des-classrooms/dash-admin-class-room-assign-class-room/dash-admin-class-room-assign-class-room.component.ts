import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { ClasseProfDto } from 'src/app/Models/dto/ClasseProfDto';
import { Professeur } from 'src/app/Models/professeur';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-class-room-assign-class-room',
  templateUrl: './dash-admin-class-room-assign-class-room.component.html',
  styleUrls: ['./dash-admin-class-room-assign-class-room.component.css']
})
export class DashAdminClassRoomAssignClassRoomComponent implements OnInit{

  FormAssign !:FormGroup;
  ListClasseGroup !: ClasseGroup[];
  ListProfs !: Professeur[];

  constructor(private fb: FormBuilder, private classeGroupService : classeGroupService, private profService: ProfService) { }
  ngOnInit(): void {

    this.profService.getAllProfs().subscribe((data) => {
      this.ListProfs = data;
    });


    this.classeGroupService.getAllClasseGroup().subscribe(data =>{
      this.ListClasseGroup = data;
      console.log(data[0].class_room_name + "------");
      
    })

    this.FormAssign = this.fb.group({
      professor_id:  ['',Validators.required],
      class_id:  ['',Validators.required]
    })
  }



  assignClassToProf(){
    if(this.FormAssign.valid){
      const newClassProf : ClasseProfDto = {
        professor_id: this.FormAssign.value.professor_id,
        class_id: this.FormAssign.value.class_id,
        professor_name: '',
        class_name: ''
      }

      this.classeGroupService.assignClasseToProf(newClassProf).subscribe(msg =>{
        alert(msg);
      })

      this.FormAssign.reset();
    }
  }
  realod(){
    this.FormAssign.reset();
  }
}
