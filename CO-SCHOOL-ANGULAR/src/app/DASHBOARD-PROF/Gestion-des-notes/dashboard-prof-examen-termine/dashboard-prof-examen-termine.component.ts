import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
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
  ngOnInit(): void {
      this.service.getAllExamenCorrectionTerminer(25).subscribe(data =>{
        this.ListExamensWithoutNotes = data;
      })
  }


  sendExamId(id : number){
      this.ExSuService.selectExam(id);
  }
}