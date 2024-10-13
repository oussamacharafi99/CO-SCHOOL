import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Examen } from 'src/app/Models/examen';
import { Professeur } from 'src/app/Models/professeur';
import { ExamenService } from 'src/app/Services/examen.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-get-exams',
  templateUrl: './dash-admin-get-exams.component.html',
  styleUrls: ['./dash-admin-get-exams.component.css']
})
export class DashAdminGetExamsComponent implements OnInit {
  displayedColumns: string[] = ['examen_name', 'matter', 'semester', 'examen_date' , 'Delete', 'Update'];
  ListExamens: Examen[] = [];
  personId !: number;
  FromSearch!: FormGroup;
  ListProfs!: Professeur[];

  constructor(
     private service: ExamenService ,
     private fb : FormBuilder,
     private profService: ProfService
     ) {}

  ngOnInit(): void {
    this.FromSearch = this.fb.group({
      profId: ['', Validators.required],
    });

    this.profService.getAllProfs().subscribe((data) => {
      this.ListProfs = data;
    });


    this.service.getAllExamens().subscribe(data => {
      this.ListExamens = data;
      console.log(data[0]?.examen_name);
    });

    this.service.getExamenChanges().subscribe(()=>{
      this.service.getAllExamens().subscribe(data => {
        this.ListExamens = data;
        console.log(data[0]?.examen_name);
      });
    })
  }

  search() {
    if(this.FromSearch.valid) {
      const selectedProfId = this.FromSearch.value.profId;
      this.service.getAllExmanesByProfId(selectedProfId).subscribe((data) => {
        this.ListExamens = data;
      });
    }
  }

  deleteExam(id: number) {
    this.service.deleteExamen(id).subscribe(() => {
      alert("l'exam a ete supprime !")
    })
  }
  realod(){
    this.ngOnInit();
  }
}