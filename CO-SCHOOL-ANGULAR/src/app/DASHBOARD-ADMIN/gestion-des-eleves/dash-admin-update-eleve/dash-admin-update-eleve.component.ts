import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { Eleve } from 'src/app/Models/eleve';
import { Role } from 'src/app/Models/enums/enum';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { EleveService } from 'src/app/Services/eleve.service';

@Component({
  selector: 'app-dash-admin-update-eleve',
  templateUrl: './dash-admin-update-eleve.component.html',
  styleUrls: ['./dash-admin-update-eleve.component.css']
})
export class DashAdminUpdateEleveComponent implements OnInit {
  FormEleve !: FormGroup;
  ListClasseGroup !: ClasseGroup[];
  eleveId!: number; // To hold the ID of the Eleve being updated

  constructor(
    private eleveService: EleveService,
    private fb: FormBuilder,
    private classeGroupService: classeGroupService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.eleveId = Number(params.get('id'));

    
      this.eleveService.getEleveByID(this.eleveId).subscribe(eleve => {
        this.FormEleve.patchValue({
          username: eleve.username,
          identificationId:eleve.identificationId,
          age: eleve.age,
          gender: eleve.gender,
          email: eleve.email,
          password: null, 
          classeId: eleve.classeGroup?.id
        });
      });
    });

    this.classeGroupService.getAllClasseGroup().subscribe(data => {
      this.ListClasseGroup = data;
    });

    // Initialize the form
    this.FormEleve = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.minLength(0)]], 
      classeId: ['', Validators.required]
    });
  }

  updateEleve() {
    if (this.FormEleve.valid) {
      const updatedEleve: Eleve = {
        identificationId:this.FormEleve.value.identificationId, 
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
      };

      this.eleveService.updateEleve(this.eleveId, updatedEleve).subscribe(msg => {
        alert('Eleve updated successfully');
      });
    }
  }
}
