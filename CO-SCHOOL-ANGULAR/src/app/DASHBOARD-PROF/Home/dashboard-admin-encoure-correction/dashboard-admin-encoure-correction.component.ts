import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
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
  ngOnInit(): void {
      this.service.getAllExamenSEncourCorrByProf(25).subscribe(data =>{
        this.ListExamensWithoutNotes = data;
      })
  }
}