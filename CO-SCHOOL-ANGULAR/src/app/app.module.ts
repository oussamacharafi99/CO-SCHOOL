import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './HOME/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { InterceptorAuth } from './Services/interceptor.service';
import { HomeMainComponent } from './HOME/home-main/home-main.component';
import { HeaderMainComponent } from './HOME/header-main/header-main.component';
import { AboutComponent } from './HOME/about/about.component';
import { ServiceHomeComponent } from './HOME/service-home/service-home.component';
import { ContactMainComponent } from './HOME/contact-main/contact-main.component';
import { ErrorMainComponent } from './HOME/error-main/error-main.component';
import { ModeHomeComponent } from './HOME/mode-home/mode-home.component';
import { DashboardComponent } from './DASHBOARD-ELEVE/dashboard/dashboard.component';
import { DashboardEleveMenuComponent } from './DASHBOARD-ELEVE/dashboard-eleve-menu/dashboard-eleve-menu.component';
import { OurCoursesMainComponent } from './HOME/our-courses-main/our-courses-main.component';
import { DashboardEleveHeaderComponent } from './DASHBOARD-ELEVE/dashboard-eleve-header/dashboard-eleve-header.component';
import { DashboardEleveNotesComponent } from './DASHBOARD-ELEVE/dashboard-eleve-notes/dashboard-eleve-notes.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DashboardEleveCalendarExamComponent } from './DASHBOARD-ELEVE/dashboard-eleve-calendar-exam/dashboard-eleve-calendar-exam.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DashboardEleveStatisticsComponent } from './DASHBOARD-ELEVE/dashboard-eleve-statistics/dashboard-eleve-statistics.component';
import { DashboardEleveHomeComponent } from './DASHBOARD-ELEVE/dashboard-eleve-home/dashboard-eleve-home.component';
import { DashboardEleveAbsenceComponent } from './DASHBOARD-ELEVE/dashboard-eleve-absence/dashboard-eleve-absence.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardProfComponent } from './DASHBOARD-PROF/dashboard-prof/dashboard-prof.component';
import { DashboardProfMenuComponent } from './DASHBOARD-PROF/dashboard-prof-menu/dashboard-prof-menu.component';
import { DashboardProfHeaderComponent } from './DASHBOARD-PROF/dashboard-prof-header/dashboard-prof-header.component';
import { DashboardProfExamenComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-examen/dashboard-prof-examen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { DashboardProfNormalExamensComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-normal-examens/dashboard-prof-normal-examens.component';
import { DashboardProfExamensNotesComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-examens-notes/dashboard-prof-examens-notes.component';
import { DashboardProfElevesComponent } from './DASHBOARD-PROF/Home/dashboard-prof-eleves/dashboard-prof-eleves.component';
import { DashboardProfCarteEleveComponent } from './DASHBOARD-PROF/dashboard-prof-carte-eleve/dashboard-prof-carte-eleve.component';
import { DashboardProfInsertElevesToExamenComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-insert-eleves-to-examen/dashboard-prof-insert-eleves-to-examen.component';
import { DashboardAdminExamCorrectionComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-admin-exam-correction/dashboard-admin-exam-correction.component';
import { DashboardAdminEncoureCorrectionComponent } from './DASHBOARD-PROF/Home/dashboard-admin-encoure-correction/dashboard-admin-encoure-correction.component';
import { DashboardAdminEleveExamenComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-admin-eleve-examen/dashboard-admin-eleve-examen.component';
import { DashboardProfHomeComponent } from './DASHBOARD-PROF/Home/dashboard-prof-home/dashboard-prof-home.component';
import { DashboardProfAddExamenComponent } from './DASHBOARD-PROF/Home/dashboard-prof-add-examen/dashboard-prof-add-examen.component';
import { DashboardProfUpdateExamenComponent } from './DASHBOARD-PROF/Home/dashboard-prof-update-examen/dashboard-prof-update-examen.component';
import { DashboardExamNotAssignComponent } from './DASHBOARD-PROF/Home/dashboard-exam-not-assign/dashboard-exam-not-assign.component';
import { DashboardProfGestionComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-gestion/dashboard-prof-gestion.component';
import { DashboardProfExamenTermineComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-examen-termine/dashboard-prof-examen-termine.component';
import { DashboardProfNoteEleveExamComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-note-eleve-exam/dashboard-prof-note-eleve-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeMainComponent,
    HeaderMainComponent,
    AboutComponent,
    ServiceHomeComponent,
    ContactMainComponent,
    ErrorMainComponent,
    ModeHomeComponent,
    DashboardComponent,
    DashboardEleveMenuComponent,
    OurCoursesMainComponent,
    DashboardEleveHeaderComponent,
    DashboardEleveNotesComponent,
    DashboardEleveCalendarExamComponent,
    DashboardEleveStatisticsComponent,
    DashboardEleveHomeComponent,
    DashboardEleveAbsenceComponent,
    DashboardProfComponent,
    DashboardProfMenuComponent,
    DashboardProfHeaderComponent,
    DashboardProfHomeComponent,
    DashboardProfExamenComponent,
    DashboardProfAddExamenComponent,
    DashboardProfNormalExamensComponent,
    DashboardProfExamensNotesComponent,
    DashboardProfElevesComponent,
    DashboardProfCarteEleveComponent,
    DashboardProfInsertElevesToExamenComponent,
    DashboardAdminExamCorrectionComponent,
    DashboardProfUpdateExamenComponent,
    DashboardAdminEncoureCorrectionComponent,
    DashboardAdminEleveExamenComponent,
    DashboardExamNotAssignComponent,
    DashboardProfGestionComponent,
    DashboardProfExamenTermineComponent,
    DashboardProfNoteEleveExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule, 
    MatTableModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorAuth,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
