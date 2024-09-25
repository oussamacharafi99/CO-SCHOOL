import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { ResultDto } from 'src/app/Models/ResultDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { SearchResultDto } from 'src/app/Models/dto/SearchResultDto';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-eleve-statistics',
  templateUrl: './dashboard-eleve-statistics.component.html',
  styleUrls: ['./dashboard-eleve-statistics.component.css']
})
export class DashboardEleveStatisticsComponent implements OnInit {
  @ViewChild('barChart', { static: true }) barChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarChart', { static: true }) radarChart!: ElementRef<HTMLCanvasElement>;
  
  chart: Chart<'bar', number[], string> | undefined;
  radar: Chart<'polarArea', number[], string> | undefined;
  formSearch!: FormGroup;
  listResult!: ResultDto[];
  year: number[] = [];
  avgNote!: number;
  personId !: number;

  constructor(private service: examenEleveService, private fb: FormBuilder) {}

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

    const barCtx = this.barChart.nativeElement.getContext('2d');
    const radarCtx = this.radarChart.nativeElement.getContext('2d');

  
    this.chart = new Chart<'bar', number[], string>(barCtx!, {
      type: 'bar',
      data: {
        labels: [], 
        datasets: [
          {
            label: '',
            backgroundColor: '#FFD900',
            borderColor: '#FFD900',
            data: [],  
          },
          {
            label: '',
            backgroundColor: 'var(--color-primary)',
            borderColor: '#FFD900',
            data: [],  
          }
        ]
      },
      options: {
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, this.chart as any);
          const dataX = this.chart!.scales['x'].getValueForPixel(canvasPosition.x);
          const dataY = this.chart!.scales['y'].getValueForPixel(canvasPosition.y);
          console.log(`X: ${dataX}, Y: ${dataY}`);
        }
      }
    });

    
    this.radar = new Chart<'polarArea', number[], string>(radarCtx!, {
      type: 'polarArea',
      data: {
        labels: ['Moyenne de semester'],  
        datasets: [{
          label: 'Moyenne des Notes',
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],  
          borderColor: ['rgba(54, 162, 235, 1)'],  
          data: []  
        }]
      },
      options: {
        animation: false,
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,  
            max: 20, 
            ticks: {
              stepSize: 5, 
            }
          }
        }
      }
    });
  }

  searching() {
    if (this.formSearch.valid) {
      const newSearch: SearchResultDto = {
        eleve_id: 3,
        semester: this.formSearch.value.semester,
        year: this.formSearch.value.year
      };

      this.service.eleve_result(newSearch.eleve_id, newSearch.semester, newSearch.year).subscribe(data => {
        this.listResult = data;
      
        if (data && this.chart) {
          const labels = data.map(result => result.matter);
          const firstNotes = data.map(result => result.firstNote ?? 0); 
          const secondNotes = data.map(result => result.secondNote ?? 0); 

          this.chart.data.labels = labels;
          this.chart.data.datasets[0].data = firstNotes; 
          this.chart.data.datasets[0].label = `Notes du ${newSearch.semester} - Premier Contrôle`;
          this.chart.data.datasets[1].data = secondNotes;
          this.chart.data.datasets[1].label = `Notes du ${newSearch.semester} - Deuxième Contrôle`;
          this.chart.update(); 
        }

        this.service.getAvgNote(newSearch.eleve_id, newSearch.semester, newSearch.year).subscribe(avgData => {
          this.avgNote = avgData.avgNote;
        
          if (this.radar) {
            this.radar.data.datasets[0].data = [this.avgNote];
            this.radar.update();
          }
        
          console.log("Average Note: " + this.avgNote);
        });
      });
    }
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
