import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassPersonDto } from 'src/app/Models/dto/ClassPersonDto';
import { ExamenEleveNoteDto } from 'src/app/Models/dto/ExamenEleveNoteDto';
import { Examen } from 'src/app/Models/examen';
import { ExamSubjectService } from 'src/app/Services/Service-subject/exam-subject.service';
import { ExamenService } from 'src/app/Services/examen.service';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-prof-note-eleve-exam',
  templateUrl: './dashboard-prof-note-eleve-exam.component.html',
  styleUrls: ['./dashboard-prof-note-eleve-exam.component.css']
})
export class DashboardProfNoteEleveExamComponent implements OnInit {
  displayedColumns: string[] = ['identificationId', 'username', 'correction'];
  listEleves!: ClassPersonDto[];
  formCorrection !: FormGroup;
  idEx!: number;
  showAlert: boolean = true; 
  eleveName !: string;
  eleveId !: number;
  newExamen!:Examen;

  constructor(
    private service: examenEleveService, 
    private exService : ExamenService,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private ExSuService : ExamSubjectService
  ) { }

        

  ngOnInit(): void {
    // this.idEx = +this.route.snapshot.paramMap.get('id')!;
    this.ExSuService.examSelected$.subscribe(exId =>{
      this.service.getElevesByExamenIdForUpdateNotes(exId).subscribe(data => {
      this.listEleves = data;
    });

    this.exService.getExamenById(exId).subscribe(data =>{
      this.newExamen = data;
    })
    })
    
    this.formCorrection = this.fb.group({
      note : ['' , Validators.required]
    })
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
