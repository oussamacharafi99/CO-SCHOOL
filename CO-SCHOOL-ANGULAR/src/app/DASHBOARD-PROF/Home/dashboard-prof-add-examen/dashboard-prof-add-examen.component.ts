import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseNameDto } from 'src/app/Models/dto/ClasseNameDto';
import { insertExamenDto } from 'src/app/Models/dto/InsertExamenDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-prof-add-examen',
  templateUrl: './dashboard-prof-add-examen.component.html',
  styleUrls: ['./dashboard-prof-add-examen.component.css']
})
export class DashboardProfAddExamenComponent implements OnInit {
  formExamen!: FormGroup;
  ListClasseRooms!: ClasseNameDto[];
  personId !: number;

  constructor(private fb: FormBuilder, private service: ExamenService, private classeService: classeGroupService) {}

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.classeService.getClassesNameOfProf(this.personId).subscribe(data => {
    this.ListClasseRooms = data;
    });

    this.formExamen = this.fb.group({
      examenName: ['', [Validators.required]],
      examenDate: ['', [Validators.required]],
      classGroupId: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      profId: this.personId,
    });
  }

  insertExamen() {
    if (this.formExamen.valid) {
      const newExamen: insertExamenDto = this.formExamen.value;

      this.service.insertExamen(newExamen).subscribe(data => {
        alert('Examen ajouté avec succès ');  
        this.formExamen.reset();
        this.ngOnInit();
      });

    }
  }

  getIdPersonFromJwt(){
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
      const jwtData : JwtDto = JSON.parse(storedJwtData);
      console.log('JWT Data:', jwtData.person_id);
      this.personId = jwtData.person_id;
    } else {
      console.log('Aucun JWT trouvé dans le localStorage');
    }
  }
  
}
