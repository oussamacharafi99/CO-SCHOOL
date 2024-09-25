import { Component, OnInit , Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultDto } from 'src/app/Models/ResultDto';
import { SearchResultDto } from 'src/app/Models/dto/SearchResultDto';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Semester } from 'src/app/Models/enums/enum';
import { AvgNote } from 'src/app/Models/AvgNote';
import { JwtDto } from 'src/app/Models/dto/Jwt';

@Component({
  selector: 'app-dashboard-eleve-notes',
  templateUrl: './dashboard-eleve-notes.component.html',
  styleUrls: ['./dashboard-eleve-notes.component.css']
})
export class DashboardEleveNotesComponent implements OnInit {
  formSearch!: FormGroup;
  listResult!: ResultDto[];
  classe !: string;
  school !:string;
  resultYear !: number;
  totaleResult !:number;
  semester !:string;
  avgNote !: number;
  personId !: number;

  year: number[] = [];
  info: string[] = [];

  constructor(private service: examenEleveService, private fb: FormBuilder, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getIdPersonFromJwt();

    const currentYear = new Date().getFullYear();
    for (let year = 2024; year <= currentYear; year++) {
      this.year.push(year);
    }

    this.formSearch = this.fb.group({
      eleve_id: [],
      semester: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  searching() {
    if (this.formSearch.valid) {
      const newSearch: SearchResultDto = {
        eleve_id: 3,
        semester: this.formSearch.value.semester,
        year: this.formSearch.value.year
      };

      this.service.eleve_result(newSearch.eleve_id , newSearch.semester , newSearch.year).subscribe(data => {
        this.listResult = data;

        if(data){
          this.school = data[0].school_name;
          this.classe = data[0].classRoomName;
          this.resultYear = newSearch.year;
          this.info = ['Etablissement : ', 'Classe : ', 'Année Scolaire : ', 'Semester : ']
          if(data[0].semester === Semester.FIRST_SEMESTER){
            this.semester = "Premier Semester"
          }
          else{
            this.semester = "Deuxiame Semester"
          }
        }

        
      });

        this.service.getAvgNote(newSearch.eleve_id , newSearch.semester , newSearch.year).subscribe(data => {
          this.avgNote = data.avgNote;
          console.log("data note : " + this.avgNote);
          
        })
      
      console.log(newSearch.eleve_id);
      console.log(newSearch.semester);
      console.log(newSearch.year);
    }
  }

  downloadPDF() {
    const element = this.renderer.selectRootElement('.resPdf', true);
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resPdf.pdf');
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
  
  // downloadImage() {
  //   if (typeof window !== 'undefined') {
  //     const element = this.renderer.selectRootElement('.result', true); 
  //     html2canvas(element).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const link = this.renderer.createElement('a');
  //       this.renderer.setAttribute(link, 'href', imgData);
  //       this.renderer.setAttribute(link, 'download', 'result.png');
  //       link.click();
  //     });
  //   }
  // }

}
