import { Component, OnInit } from '@angular/core';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Examen } from 'src/app/Models/examen';
import { ExamenService } from 'src/app/Services/examen.service';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-prof-normal-examens',
  templateUrl: './dashboard-prof-normal-examens.component.html',
  styleUrls: ['./dashboard-prof-normal-examens.component.css']
})
export class DashboardProfNormalExamensComponent implements OnInit {
    displayedColumns: string[] = ['examen_name', 'matter', 'semester', 'examen_date' , 'Delete', 'Update'];
    ListExamens: Examen[] = [];
    personId !: number;
  
    constructor(private service: ExamenService, private examEleveService : examenEleveService) {}
  
    ngOnInit(): void {
      this.getIdPersonFromJwt();

      this.service.getExamenChanges().subscribe(() => {
          this.loadExamens();
      });

      this.loadExamens(); 
  }

  loadExamens(): void {
      this.service.getAllExmanesByProfId(this.personId).subscribe(data => {
          this.ListExamens = data;
          console.log(data[0]?.examen_name);
      });
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
  

  