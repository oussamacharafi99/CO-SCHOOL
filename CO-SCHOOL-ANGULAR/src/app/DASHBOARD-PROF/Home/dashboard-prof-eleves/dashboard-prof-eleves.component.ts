import { Component, OnInit } from '@angular/core';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
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
  personId !: number;
  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.service.getElevesByProfId(this.personId).subscribe(data => {
      this.ListEleves = data;
    });
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
