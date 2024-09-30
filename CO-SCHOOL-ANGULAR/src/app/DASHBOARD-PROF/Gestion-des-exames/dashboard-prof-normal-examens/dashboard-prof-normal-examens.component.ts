import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/Models/examen';
import { ExamenService } from 'src/app/Services/examen.service';

@Component({
  selector: 'app-dashboard-prof-normal-examens',
  templateUrl: './dashboard-prof-normal-examens.component.html',
  styleUrls: ['./dashboard-prof-normal-examens.component.css']
})
export class DashboardProfNormalExamensComponent implements OnInit {
    displayedColumns: string[] = ['examen_name', 'matter', 'semester', 'examen_date' , 'Delete', 'Update'];
    ListExamens: Examen[] = [];
  
    constructor(private service: ExamenService) {}
  
    ngOnInit(): void {
      this.service.getAllExmanesByProfId(25).subscribe(data => {
        this.ListExamens = data;
        console.log(data[0]?.examen_name);
      });
    }
  }
  