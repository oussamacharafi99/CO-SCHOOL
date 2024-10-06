import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Examen } from 'src/app/Models/examen';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-prof-examens-notes',
  templateUrl: './dashboard-prof-examens-notes.component.html',
  styleUrls: ['./dashboard-prof-examens-notes.component.css']
})
export class DashboardProfExamensNotesComponent  implements OnInit {
  constructor(private service : ExamenService){}
  displayedColumns: string[] = ['id','matter','examen_name','examen_date', 'semester' , 'Update'];
  ListExamensWithoutNotes !: ExamenProfDto[];
  personId !: number;
  ngOnInit(): void {
    this.getIdPersonFromJwt();
      this.service.getAllExamenWithoutNoteByProf(this.personId).subscribe(data =>{
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