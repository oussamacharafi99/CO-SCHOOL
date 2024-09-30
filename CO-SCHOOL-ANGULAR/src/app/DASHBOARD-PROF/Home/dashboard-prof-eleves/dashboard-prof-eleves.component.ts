import { Component, OnInit } from '@angular/core';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { classeGroupService } from 'src/app/Services/classe-group.service';

@Component({
  selector: 'app-dashboard-prof-eleves',
  templateUrl: './dashboard-prof-eleves.component.html',
  styleUrls: ['./dashboard-prof-eleves.component.css']
})
export class DashboardProfElevesComponent implements OnInit {
  constructor(private service: classeGroupService) {}

  displayedColumns: string[] = [
    // 'classeId',
    'identificationId',
    'classRoomName',
    'username',
    'email',
    'gender',
    'age',
  ];

  ListEleves!: ClassPersonDto[];

  ngOnInit(): void {
    this.service.getElevesByProfId(25).subscribe(data => {
      this.ListEleves = data;
    });
  }
}
