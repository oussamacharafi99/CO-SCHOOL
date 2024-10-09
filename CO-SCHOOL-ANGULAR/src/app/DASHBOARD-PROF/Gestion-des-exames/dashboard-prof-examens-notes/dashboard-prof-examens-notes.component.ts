import { Component, OnInit } from '@angular/core';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { ExamenEleveDto } from 'src/app/Models/dto/ExamenEleveDto';
import { ExamenProfDto } from 'src/app/Models/dto/ExamenProfDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Eleve } from 'src/app/Models/eleve';
import { Examen } from 'src/app/Models/examen';
import { EleveService } from 'src/app/Services/eleve.service';
import { ExamenService } from 'src/app/Services/examen.service';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-prof-examens-notes',
  templateUrl: './dashboard-prof-examens-notes.component.html',
  styleUrls: ['./dashboard-prof-examens-notes.component.css']
})
export class DashboardProfExamensNotesComponent  implements OnInit {
  constructor(private service : ExamenService , private examEleveService : examenEleveService , private eleveService : EleveService){}
  displayedColumns: string[] = ['id','matter','examen_name','examen_date', 'semester' , 'Delete', 'Update'];
  ListExamensWithoutNotes !: ExamenProfDto[];
  listEleves!: Eleve[];
  personId !: number;
  idEx !: number;
  classRoomId !: number;
  showAlert: boolean = true; 


  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.getAllExamWithoutNote();

    this.eleveService.getAllEleves().subscribe(eleves =>{
      this.listEleves = eleves;
      this.classRoomId = eleves[0].classeGroup.id;      
    })

    this.service.getExamenChanges().subscribe((val)=>{
      console.log(val);

      this.getAllExamWithoutNote();
    })

  }

  getAllExamWithoutNote(){
    this.service.getAllExamenWithoutNoteByProf(this.personId).subscribe(data =>{
      this.ListExamensWithoutNotes = data;
    })
  }

  getIdExam(id : number){
    this.showAlert = false
    console.log(id  + "///" + this.classRoomId);
    this.idEx = id;
  }

  delete(){
    const newexamenEleveDto : ExamenEleveDto ={
      examenId: this.idEx,
      classeId: this.classRoomId
    }
    this.service.deleteElevesFromExamen(newexamenEleveDto).subscribe(msg =>{
      console.log(msg);
      
    })
    this.getAllExamWithoutNote();
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