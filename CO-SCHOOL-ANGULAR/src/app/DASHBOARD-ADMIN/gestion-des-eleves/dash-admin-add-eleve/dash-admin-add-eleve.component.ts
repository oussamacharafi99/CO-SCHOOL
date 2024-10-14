import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { Eleve } from 'src/app/Models/eleve';
import { Role } from 'src/app/Models/enums/enum';
import { Professeur } from 'src/app/Models/professeur';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { EleveService } from 'src/app/Services/eleve.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-add-eleve',
  templateUrl: './dash-admin-add-eleve.component.html',
  styleUrls: ['./dash-admin-add-eleve.component.css']
})
export class DashAdminAddEleveComponent implements OnInit{
  constructor(private eleveService :EleveService, private fb : FormBuilder, private classeGroupService : classeGroupService) {}
  FormEleve !: FormGroup;
  ListClasseGroup !: ClasseGroup[];

  ngOnInit(): void {
    this.classeGroupService.getAllClasseGroup().subscribe(data =>{
      this.ListClasseGroup = data;
      console.log(data[0].class_room_name + "------");
      
    })

    this.FormEleve = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      classeId:['', Validators.required]
    });
  }

  addEleve(){
    if(this.FormEleve.valid){
      const newEleve : Eleve = {
        identificationId: '',
        username: this.FormEleve.value.username,
        age: this.FormEleve.value.age,
        gender: this.FormEleve.value.gender,
        email: this.FormEleve.value.email,
        password: this.FormEleve.value.password,
        roles: [Role.ROLE_ELEVE],
        classeGroup: {
          id: this.FormEleve.value.classeId,
          class_room_name: '',
          school_name: '',
          eleves: [],
          professeurs: []
        }
      }

      console.log(newEleve);
      
      this.eleveService.addEleve(newEleve).subscribe(msg =>{
        alert(msg);
      })
    }

    this.FormEleve = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      classeId:['', Validators.required]
    });
  }


}