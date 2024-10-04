import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseGroup } from 'src/app/Models/ClasseGroup';
import { Professeur } from 'src/app/Models/professeur';
import { classeGroupService } from 'src/app/Services/classe-group.service';
import { ProfService } from 'src/app/Services/prof.service';

@Component({
  selector: 'app-dash-admin-get-profs',
  templateUrl: './dash-admin-get-profs.component.html',
  styleUrls: ['./dash-admin-get-profs.component.css']
})
export class DashAdminGetProfsComponent implements OnInit {
  displayedColumns: string[] = ['identificationId', 'username', 'email', 'gender', 'age'];
  FromSearch!: FormGroup;
  ListClasseGroup!: ClasseGroup[];
  ListProfs!: Professeur[];

  constructor(
    private profService: ProfService,
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

    
    this.profService.getAllProfs().subscribe((data) => {
      this.ListProfs = data;
    });
  }

  search() {
    if (this.FromSearch.valid) {
      const selectedClassId = this.FromSearch.value.classeId;
      this.profService.getAllProfsByClassroomId(selectedClassId).subscribe((data) => {
        this.ListProfs = data;
      });
    }
  }

  realod(){
    this.ngOnInit();
  }
}
