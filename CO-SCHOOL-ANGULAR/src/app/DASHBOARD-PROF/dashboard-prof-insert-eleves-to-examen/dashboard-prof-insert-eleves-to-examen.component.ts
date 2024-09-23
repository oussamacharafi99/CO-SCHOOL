import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseNameDto } from 'src/app/Models/dto/ClasseNameDto';
import { ExamenEleveDto } from 'src/app/Models/dto/ExamenEleveDto';
import { ExamenNameDto } from 'src/app/Models/dto/ExamenNameDto';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ExmaneService } from 'src/app/Services/examen.service';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-prof-insert-eleves-to-examen',
  templateUrl: './dashboard-prof-insert-eleves-to-examen.component.html',
  styleUrls: ['./dashboard-prof-insert-eleves-to-examen.component.css']
})
export class DashboardProfInsertElevesToExamenComponent implements OnInit {
    ListClasse !: ClasseNameDto[];
    ListExamens !: ExamenNameDto[];
    FormExamenEleves !: FormGroup;
    showAlert: boolean = false; 

    constructor(private fb : FormBuilder, private classeService: classeGroupService, private exService : examenEleveService, private service : ExmaneService) {}

    ngOnInit(): void {
      this.classeService.getClassesNameOfProf(25).subscribe(data => {
        this.ListClasse = data;
      });

      this.service.getAllExamenInassign(25).subscribe(data => {
        this.ListExamens = data;
      });

      this.FormExamenEleves = this.fb.group({
        examenId : ['', [Validators.required]],
        classeId : ['', [Validators.required]],
      });
    }

    submit() {
      if (this.FormExamenEleves.valid) {
        const newExamenEleveDto: ExamenEleveDto = {
          examenId: this.FormExamenEleves.value.examenId,
          classeId: this.FormExamenEleves.value.classeId
        };
    
        this.exService.insertElevesToExamen(newExamenEleveDto).subscribe(
          data => {
            alert("Élèves ajoutés à l'examen avec succès" + data);
          }
        );
      }
      this.FormExamenEleves = this.fb.group({
        examenId : ['', [Validators.required]],
        classeId : ['', [Validators.required]],
      });
      this.showAlert = true; 
    }
}
