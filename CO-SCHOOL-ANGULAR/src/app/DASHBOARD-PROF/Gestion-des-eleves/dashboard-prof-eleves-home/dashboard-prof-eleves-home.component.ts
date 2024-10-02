import { Component, OnInit } from '@angular/core';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { ExamenDateDto } from 'src/app/Models/dto/ExamenDateDto';
import { Eleve } from 'src/app/Models/eleve';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-prof-eleves-home',
  templateUrl: './dashboard-prof-eleves-home.component.html',
  styleUrls: ['./dashboard-prof-eleves-home.component.css']
})
export class DashboardProfElevesHomeComponent implements OnInit {
  ListEleves!: ClassPersonDto[];
  eleve!: Eleve;
  exames!: ExamenDateDto[];
  profId = 25;

  constructor(
    private service: classeGroupService,
    private authService: AuthServiceService,
    private exElService: examenEleveService
  ) {}

  ngOnInit(): void {
    this.service.getElevesByProfId(this.profId).subscribe(
      data => {
        console.log('Liste des élèves:', data); // Vérifiez les données ici
        this.ListEleves = data;
      },
      error => {
        console.error('Erreur lors de la récupération des élèves', error);
      }
    );
  }

  getEleveAndExam(idE: number) {
    console.log("--- > " + idE);
    this.authService.getEleveById(idE).subscribe(
      eleve => {
        this.eleve = eleve;
        console.log('Détails de l\'élève:', eleve);
      },
      error => {
        console.error('Erreur lors de la récupération de l\'élève', error);
      }
    );

    this.exElService.getExamEleveByIdEleveAndProfId(idE, this.profId).subscribe(
      exam => {
        this.exames = exam;
        console.log('Examens de l\'élève:', exam);
      },
      error => {
        console.error('Erreur lors de la récupération des examens', error);
      }
    );
  }
}
