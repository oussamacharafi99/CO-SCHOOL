import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-admin-encoure-correction',
  templateUrl: './dashboard-admin-encoure-correction.component.html',
  styleUrls: ['./dashboard-admin-encoure-correction.component.css']
})
export class DashboardAdminEncoureCorrectionComponent  implements OnInit {
  constructor(private service :ExamenService){}
  displayedColumns: string[] = ['matter','examen_date','Update'];
  ListExamensWithoutNotes !: ExamenProfDto[];
  personId !: number;

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.getAllEnCoureDeCorriction()
    this.service.getExamenChanges().subscribe(()=>{
      this.getAllEnCoureDeCorriction()
    })
  }

  getAllEnCoureDeCorriction(){
    this.service.getAllExamenSEncourCorrByProf(this.personId).subscribe(data =>{
        this.ListExamensWithoutNotes = data;
      })
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