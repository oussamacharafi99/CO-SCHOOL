import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { ExamSubjectService } from 'src/app/Services/Service-subject/exam-subject.service';
import { ExamenService } from 'src/app/Services/examen.service';


@Component({
  selector: 'app-dashboard-prof-examen-termine',
  templateUrl: './dashboard-prof-examen-termine.component.html',
  styleUrls: ['./dashboard-prof-examen-termine.component.css']
})
export class DashboardProfExamenTermineComponent implements OnInit {
  constructor(private service :ExamenService , private ExSuService : ExamSubjectService){}
  displayedColumns: string[] = ['id','matter','examen_name','examen_date', 'semester' , 'Update'];
  ListExamensWithoutNotes !: ExamenProfDto[];
  personId !: number;

  ngOnInit(): void {
      this.getIdPersonFromJwt();
      this.getAllExamTerminer();
      this.service.getExamenChanges().subscribe(()=>{
        this.getAllExamTerminer();
      })
      
  }

  getAllExamTerminer(){
    this.service.getAllExamenCorrectionTerminer(this.personId).subscribe(data =>{
        this.ListExamensWithoutNotes = data;
      })
  }


  sendExamId(id : number){
      this.ExSuService.selectExam(id);
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