import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/Models/enums/enum';
import { Professeur } from 'src/app/Models/professeur';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-add-prof',
  templateUrl: './dash-admin-add-prof.component.html',
  styleUrls: ['./dash-admin-add-prof.component.css']
})
export class DashAdminAddProfComponent implements OnInit{
  constructor(private profService :ProfService, private fb : FormBuilder) {}
  FormProf !: FormGroup;

  ngOnInit(): void {
    this.FormProf = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(70)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  addProf(){
    if(this.FormProf.valid){
      const newProf : Professeur = {
        identificationId: '',
        username: this.FormProf.value.username,
        age: this.FormProf.value.age,
        gender: this.FormProf.value.gender,
        email: this.FormProf.value.email,
        password: this.FormProf.value.password,
        roles: [Role.ROLE_PROF]
      }

      this.profService.addProf(newProf).subscribe(msg =>{
        alert(msg);
      })
    }

    this.FormProf = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(70)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


}
