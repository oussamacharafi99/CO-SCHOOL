import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';  
import dayGridPlugin from '@fullcalendar/daygrid';
import { DateClickArg } from '@fullcalendar/interaction';
import { AbsenceService } from 'src/app/Services/absence.service';
import { Absence } from 'src/app/Models/absence';

@Component({
  selector: 'app-dashboard-eleve-absence',
  templateUrl: './dashboard-eleve-absence.component.html',
  styleUrls: ['./dashboard-eleve-absence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardEleveAbsenceComponent implements OnInit {
  ListAbsence: Absence[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    selectable: true,
    plugins: [dayGridPlugin],
    events: [],  
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEvent.bind(this),
    dayCellClassNames: ['cellrouge'],
    eventColor: "yellow",
    eventTextColor: "var(--text-color)",
  };

  constructor(private service: AbsenceService) {}

  ngOnInit() {
    this.service.getAbsenceEleve(3).subscribe(data => {
      this.ListAbsence = data;
      const events = this.ListAbsence.map(absence => ({
        title: absence.motif + " |---| " +absence.time ,
        start: new Date(absence.date), 
        backgroundColor: absence.status ? 'green' : 'red',  
        borderColor: absence.status ? 'darkgreen' : 'darkred',  
      }));
      console.log("Events formatted:", events);  
      this.calendarOptions = {
        ...this.calendarOptions,
        events: events,  
      };
    });
  }
  

  handleEvent(clickInfo: EventClickArg) {
    alert('Motif: ' + clickInfo.event.title);
  }

  handleDateClick(dateClickInfo: DateClickArg) {
    alert('Date clicked: ' + dateClickInfo.dateStr);
  }
}
