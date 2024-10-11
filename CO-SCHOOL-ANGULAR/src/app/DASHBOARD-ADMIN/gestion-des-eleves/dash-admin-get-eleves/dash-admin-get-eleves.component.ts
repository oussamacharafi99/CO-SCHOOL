import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { Eleve } from 'src/app/Models/eleve';
import { Professeur } from 'src/app/Models/professeur';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { EleveService } from 'src/app/Services/eleve.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-get-eleves',
  templateUrl: './dash-admin-get-eleves.component.html',
  styleUrls: ['./dash-admin-get-eleves.component.css']
})
export class DashAdminGetElevesComponent implements OnInit {
  displayedColumns: string[] = ['identificationId', 'username', 'email', 'gender', 'age'];
  FromSearch!: FormGroup;
  ListClasseGroup!: ClasseGroup[];
  ListEleves!: Eleve[];

  constructor(
    private eleveService: EleveService,
    private classeGroupService: classeGroupService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
    this.FromSearch = this.fb.group({
      classeId: ['', Validators.required],
    });


    this.classeGroupService.getAllClasseGroup().subscribe((data) => {
      this.ListClasseGroup = data;
    });

    
    this.eleveService.getAllEleves().subscribe((data) => {
      this.ListEleves = data;
    });
  }

  search() {
    if (this.FromSearch.valid) {
      const selectedClassId = this.FromSearch.value.classeId;
      this.eleveService.getAllElevesByClasseGroupId(selectedClassId).subscribe((data) => {
        this.ListEleves = data;
      });
    }
  }

  realod(){
    this.ngOnInit();
  }
}
