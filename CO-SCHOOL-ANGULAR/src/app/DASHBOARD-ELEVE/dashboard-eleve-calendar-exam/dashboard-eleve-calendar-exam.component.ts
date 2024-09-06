import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ExamenDateDto } from 'src/app/Models/dto/ExamenDateDto';
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

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg: any) => this.handleDateClick(arg),
    events: [],
    eventColor: "transparent",
    eventTextColor: "var(--text-color)",
  };

  constructor(private service: examenEleveService) { }

  ngOnInit(): void {
    this.service.getExamenDates(3).subscribe(data => {
      this.examensDates = data;

      const events = this.examensDates.map(exam => ({
        title: `${exam.examen_name} \n- ${exam.matter}`,
        date: exam.examen_date,
        backgroundColor: exam.examen_note === null ? 'var(--color-primary)' : 'green',
        textColor: 'var(--text-color)',
        extendedProps: {
          examName: exam.examen_name,
          examDate: exam.examen_date
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

  handleDateClick(arg: any) {
    const clickedEvent = this.examensDates.find(exam => exam.examen_date === arg.dateStr);

    if (clickedEvent) {
      alert(`Exam: ${clickedEvent.matter} --  ${clickedEvent.examen_name} \nDate: ${clickedEvent.examen_date}`);
    } else {
      alert('No exam on this date.');
    }
  }
}
