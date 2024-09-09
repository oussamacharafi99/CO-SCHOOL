import { Component, OnInit } from '@angular/core';
import { ClasseProfDto } from 'src/app/Models/dto/ClasseProfDto';
import { classeGroupService } from 'src/app/Services/classe-group.service';

@Component({
  selector: 'app-dashboard-eleve-home',
  templateUrl: './dashboard-eleve-home.component.html',
  styleUrls: ['./dashboard-eleve-home.component.css']
})
export class DashboardEleveHomeComponent implements OnInit{
  constructor(private service : classeGroupService){}

  listProfOfClasse !: ClasseProfDto[];
  classe_name !: string;

  ngOnInit(): void {
    this.service.getProfClasseGroup(1).subscribe(data =>{
      this.listProfOfClasse = data;
      this.classe_name = data[0].class_name;
    })
  }


}
