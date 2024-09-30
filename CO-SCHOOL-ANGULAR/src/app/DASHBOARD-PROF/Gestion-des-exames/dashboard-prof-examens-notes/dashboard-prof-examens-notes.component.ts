import { Component, OnInit } from '@angular/core';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
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
  ngOnInit(): void {
      this.service.getAllExamenWithoutNoteByProf(25).subscribe(data =>{
        this.ListExamensWithoutNotes = data;
      })
  }
}