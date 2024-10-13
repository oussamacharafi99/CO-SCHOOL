import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { ExamenEleveNoteDto } from 'src/app/Models/dto/ExamenEleveNoteDto';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';


@Component({
  selector: 'app-dashboard-admin-exam-correction',
  templateUrl: './dashboard-admin-exam-correction.component.html',
  styleUrls: ['./dashboard-admin-exam-correction.component.css'],
})
export class DashboardAdminExamCorrectionComponent implements OnInit {
  displayedColumns: string[] = ['identificationId', 'username', 'classRoomName', 'correction'];
  listEleves!: ClassPersonDto[];
  formCorrection !: FormGroup;
  idEx!: number;
  showAlert: boolean = true; 
  eleveName !: string;
  eleveId  !: number;

  constructor(
    private service: examenEleveService, 
    private route: ActivatedRoute,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.idEx = +this.route.snapshot.paramMap.get('id')!;
    this.getElevesByExamId();
    this.service.getChanges().subscribe(()=>{
      this.getElevesByExamId();
    })

    this.formCorrection = this.fb.group({
      note : ['' , Validators.required]
    })
  }

  getElevesByExamId(){
    this.service.getElevesByExamenId(this.idEx).subscribe(data => {
      this.listEleves = data;
    });
  }

  print(id : number , eleve : string){
    this.showAlert = false
    this.eleveName = eleve;
    this.eleveId = id;
    // alert("eleve id : "+ id + "-----||-----" + "exame id :" + this.id);
  }

  insertCorrection(){
      if(this.formCorrection.valid){
        const newNote : ExamenEleveNoteDto = {
          examenNote:  this.formCorrection.value.note,
        }
        this.service.insertNote(this.idEx , this.eleveId ,newNote).subscribe();
        alert("The correction has been saved successfully");
        this.formCorrection.reset();
        this.showAlert = true;
      }
  }

  validateNote(event: any) {
    const inputValue = event.target.value;
    if (inputValue < 0) {
      event.target.value = 0;
    } else if (inputValue > 20) {
      event.target.value = 20;
    }
  }
}
