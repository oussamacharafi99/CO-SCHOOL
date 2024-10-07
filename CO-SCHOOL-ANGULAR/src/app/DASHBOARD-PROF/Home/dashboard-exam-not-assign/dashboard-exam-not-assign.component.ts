import { Component, OnInit } from '@angular/core';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Examen } from 'src/app/Models/examen';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-exam-not-assign',
  templateUrl: './dashboard-exam-not-assign.component.html',
  styleUrls: ['./dashboard-exam-not-assign.component.css']
})
export class DashboardExamNotAssignComponent  implements OnInit {
  displayedColumns: string[] = ['examen_name', 'matter', 'semester', 'examen_date' , 'Delete', 'Update'];
  ListExamens: Examen[] = [];
  showAlert: boolean = true; 
  examenId !: number;
  metter !: string;
  personId !: number;


  constructor(private service: ExamenService) {}

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.getExamens();
    this.service.getExamenChanges().subscribe(()=>{
      this.getExamens();
    })
    
  }

  getExamens(): void {
    this.service.getAllExamenInassignByProfId(this.personId).subscribe(data => {
      this.ListExamens = data;
      console.log(data[0]?.examen_name);
    });
  }

  popup(id : number , metter : string){
    this.showAlert = false
    this.examenId = id;
    this.metter = metter;
  }

  delete(){
    this.service.deleteExamen(this.examenId).subscribe()
    this.getExamens();
    this.showAlert = true;
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