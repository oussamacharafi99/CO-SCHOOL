import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClasseNameDto } from 'src/app/Models/dto/ClasseNameDto';
import { insertExamenDto } from 'src/app/Models/dto/InsertExamenDto';
import { Examen } from 'src/app/Models/examen';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ExmaneService } from 'src/app/Services/examen.service';

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

  constructor(
    private fb: FormBuilder,
    private service: ExmaneService,
    private classeService: classeGroupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.formExamen = this.fb.group({
      examenName: ['', [Validators.required]],
      examenDate: ['', [Validators.required]],
      classGroupId: ['', [Validators.required]],
      matter: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      profId: ''
    });

    // Get the examen ID from route params
    this.idEx = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the examen by ID and patch the form values
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

    // Fetch the list of classes
    this.classeService.getClassesNameOfProf(25).subscribe((data) => {
      this.ListClasseRooms = data;
    });
  }

  update() {
    if (this.formExamen.valid) {
      const newExamen: insertExamenDto = this.formExamen.value;
      this.service.UpdateExamen(this.idEx , newExamen).subscribe(() => {
        alert('Examen modifié avec succès');
      });
    }
  }
}
