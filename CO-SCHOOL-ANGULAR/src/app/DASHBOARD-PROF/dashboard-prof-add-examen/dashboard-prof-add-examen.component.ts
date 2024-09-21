import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseNameDto } from 'src/app/Models/dto/ClasseNameDto';
import { insertExamenDto } from 'src/app/Models/dto/InsertExamenDto';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ExmaneService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-prof-add-examen',
  templateUrl: './dashboard-prof-add-examen.component.html',
  styleUrls: ['./dashboard-prof-add-examen.component.css']
})
export class DashboardProfAddExamenComponent implements OnInit {
  formExamen!: FormGroup;
  ListClasseRooms!: ClasseNameDto[];

  constructor(private fb: FormBuilder, private service: ExmaneService, private classeService: classeGroupService) {}

  ngOnInit(): void {
    this.classeService.getClassesNameOfProf(25).subscribe(data => {
      this.ListClasseRooms = data;
    });

    this.formExamen = this.fb.group({
      examenName: ['', [Validators.required]],
      examenDate: ['', [Validators.required]],
      classGroupId: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      profId: 25,
    });
  }

  insertExamen() {
    if (this.formExamen.valid) {
      const newExamen: insertExamenDto = this.formExamen.value;

      this.service.insertExamen(newExamen).subscribe(data => {
        alert('Examen ajouté avec succès ');  
      });

    }
    this.formExamen = this.fb.group({
      examenName: ['', [Validators.required]],
      examenDate: ['', [Validators.required]],
      classGroupId: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      profId:'',
    });
  }

  
}
