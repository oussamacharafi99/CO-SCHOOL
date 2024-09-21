import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';


@Component({
  selector: 'app-dashboard-admin-exam-correction',
  templateUrl: './dashboard-admin-exam-correction.component.html',
  styleUrls: ['./dashboard-admin-exam-correction.component.css'],
})
export class DashboardAdminExamCorrectionComponent implements OnInit {
  displayedColumns: string[] = ['identificationId', 'username', 'classRoomName', 'correction'];
  listEleves!: ClassPersonDto[];
  id!: number;

  constructor(
    private service: examenEleveService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.service.getElevesByExamenId(this.id).subscribe(data => {
      this.listEleves = data;
    });
  }

  print(id : number){
    alert("eleve id : "+ id + "-----||-----" + "exame id :" + this.id);
  }
}
