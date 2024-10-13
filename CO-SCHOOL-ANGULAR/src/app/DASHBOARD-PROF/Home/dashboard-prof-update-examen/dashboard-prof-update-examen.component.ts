import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasseNameDto } from 'src/app/Models/dto/ClasseNameDto';
import { insertExamenDto } from 'src/app/Models/dto/InsertExamenDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Examen } from 'src/app/Models/examen';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-prof-update-examen',
  templateUrl: './dashboard-prof-update-examen.component.html',
  styleUrls: ['./dashboard-prof-update-examen.component.css']
})
export class DashboardProfUpdateExamenComponent implements OnInit {
  formExamen!: FormGroup;
  ListClasseRooms!: ClasseNameDto[];
  ExamRecuper!: Examen;
  idEx!: number;
  classeName!: string;
  personId !: number;

  constructor(
    private fb: FormBuilder,
    private service: ExamenService,
    private classeService: classeGroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    
    this.formExamen = this.fb.group({
      examenName: ['', [Validators.required]],
      examenDate: ['', [Validators.required]],
      classGroupId: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      profId: this.personId
    });

    
    this.route.params.subscribe(params => {
      this.idEx = +params['id'];

      this.service.getExamenById(this.idEx).subscribe((data) => {
        this.ExamRecuper = data;
        
        this.formExamen.patchValue({
          examenName: this.ExamRecuper.examen_name,
          examenDate: this.ExamRecuper.examen_date,
          classGroupId: this.ExamRecuper.class_room,
          matter: this.ExamRecuper.matter,
          semester: this.ExamRecuper.semester,
          profId: this.ExamRecuper.professeur.id
        });
      });

      this.getClassesOfProf();
      this.classeService.getChanges().subscribe(()=>{
        this.getClassesOfProf();
      })
      
    });
  }

  getClassesOfProf(){
    this.classeService.getClassesNameOfProf(this.personId).subscribe((data) => {
        this.ListClasseRooms = data;
      });
  }

  update() {
    if (this.formExamen.valid) {
      const newExamen: insertExamenDto = this.formExamen.value;
      this.service.updateExamen(this.idEx, newExamen).subscribe(() => {
        alert('Examen modifié avec succès');
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
