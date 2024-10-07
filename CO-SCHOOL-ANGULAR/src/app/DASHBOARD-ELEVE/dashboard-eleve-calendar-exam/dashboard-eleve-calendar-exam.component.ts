import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ExamenDateDto } from 'src/app/Models/dto/ExamenDateDto';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { examenEleveService } from 'src/app/Services/examen_eleve.service';

@Component({
  selector: 'app-dashboard-eleve-calendar-exam',
  templateUrl: './dashboard-eleve-calendar-exam.component.html',
  styleUrls: ['./dashboard-eleve-calendar-exam.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardEleveCalendarExamComponent implements OnInit {
  examensDates!: ExamenDateDto[];
  status!: string;
  currentDate!: string;
  personId !: number;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg: any) => this.handleDateClick(arg),
    eventClick: (arg: EventClickArg) => this.handleEventClick(arg), 
    events: [],
    eventColor: "transparent",
    eventTextColor: "var(--text-color)",
  };

  constructor(private service: examenEleveService) { }

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.service.getExamenDates(this.personId).subscribe(data => {
      this.examensDates = data;
      const events = this.examensDates.map(exam => ({
        title: `${exam.examen_name} \n- ${exam.matter}`,
        date: exam.examen_date,
        backgroundColor: exam.examen_note === null ? 'var(--color-primary)' : '#0fc70f',
        textColor: 'var(--text-color)',
        extendedProps: {
          examName: exam.examen_name,
          examDate: exam.examen_date,
          examMatter: exam.matter,
          examNote: exam.examen_note
        }
      }));

      this.calendarOptions = {
        ...this.calendarOptions,
        events: events
      };
    });

    const now = new Date();
    this.currentDate = now.toLocaleDateString();
  }

  handleEventClick(arg: EventClickArg) {
    const examName = arg.event.extendedProps['examName'];
    const examMatter = arg.event.extendedProps['examMatter'];
    const examDate = arg.event.extendedProps['examDate'];
    const examNote = arg.event.extendedProps['examNote'];

    alert(`Exam: ${examName}\nMatter: ${examMatter}\nDate: ${examDate}\nNote: ${examNote !== null ? examNote : 'Not yet graded'}`);
  }

  handleDateClick(arg: any) {
    const clickedEvent = this.examensDates.find(exam => exam.examen_date === arg.dateStr);

    if (clickedEvent) {
      alert(`Exam: ${clickedEvent.matter} --  ${clickedEvent.examen_name} \nDate: ${clickedEvent.examen_date}`);
    } else {
      alert('No exam on this date.');
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
