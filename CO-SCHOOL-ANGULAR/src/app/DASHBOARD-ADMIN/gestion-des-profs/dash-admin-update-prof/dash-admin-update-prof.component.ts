import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { Professeur } from 'src/app/Models/professeur';
import { Role } from 'src/app/Models/enums/enum';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
    selector: 'app-dash-admin-update-prof',
    templateUrl: './dash-admin-update-prof.component.html',
    styleUrls: ['./dash-admin-update-prof.component.css']
})
export class DashAdminUpdateProfComponent implements OnInit {
    FormProfesseur!: FormGroup;
    ListClasseGroup!: ClasseGroup[];
    profId!: number; 

    constructor(
        private profService: ProfService,
        private fb: FormBuilder,
        private classeGroupService: classeGroupService,
        private route: ActivatedRoute, 
        private router: Router 
    ) {}

    ngOnInit(): void {
        
        this.route.paramMap.subscribe(params => {
            this.profId = Number(params.get('id')); 

            
            this.profService.getEleveByID(this.profId).subscribe(prof => {
                this.FormProfesseur.patchValue({
                    username: prof.username,
                    age: prof.age,
                    gender: prof.gender,
                    email: prof.email,
                    password: null,
                });
            });
        });

        
        this.classeGroupService.getAllClasseGroup().subscribe(data => {
            this.ListClasseGroup = data;
        });

        
        this.FormProfesseur = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            age: ['', Validators.required],
            gender: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.minLength(0)]],
        });
    }

    updateProfesseur() {
        if (this.FormProfesseur.valid) {
            const updatedProf: Professeur = {
                identificationId: '', 
                username: this.FormProfesseur.value.username,
                age: this.FormProfesseur.value.age,
                gender: this.FormProfesseur.value.gender,
                email: this.FormProfesseur.value.email,
                password: this.FormProfesseur.value.password, 
                roles: [Role.ROLE_PROF]
            };

            
            this.profService.updateEleve(this.profId, updatedProf).subscribe(msg => {
                alert('Professeur updated successfully');
                this.router.navigate(['/profs']); 
            });
        }
    }
}
