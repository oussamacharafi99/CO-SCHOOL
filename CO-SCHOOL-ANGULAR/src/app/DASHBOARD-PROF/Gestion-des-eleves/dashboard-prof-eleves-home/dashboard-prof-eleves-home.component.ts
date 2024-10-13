import { Component, OnInit } from '@angular/core';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { ExamenDateDto } from 'src/app/Models/dto/ExamenDateDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
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
  personId !: number;

  constructor(
    private service: classeGroupService,
    private authService: AuthServiceService,
    private exElService: examenEleveService
  ) {}

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.getElevesByProfId();

    this.service.getChanges().subscribe(()=>{
        this.getElevesByProfId();
    })
  }

  getElevesByProfId(){
    this.service.getElevesByProfId(this.personId).subscribe(
      data => {
        console.log('Liste des élèves:', data); 
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
      }
    );

    this.exElService.getExamEleveByIdEleveAndProfId(idE, this.personId).subscribe(
      exam => {
        this.exames = exam;
        console.log('Examens de l\'élève:', exam);
      },
      error => {
        console.error('Erreur lors de la récupération des examens', error);
      }
    );
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
