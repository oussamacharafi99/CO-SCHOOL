import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './HOME/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorAuth } from './Services/interceptor.service';
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
import { DashboardProfElevesHomeComponent } from './DASHBOARD-PROF/Gestion-des-eleves/dashboard-prof-eleves-home/dashboard-prof-eleves-home.component';
import { DashAdminMenuComponent } from './DASHBOARD-ADMIN/dash-admin-menu/dash-admin-menu.component';
import { DashAdminHeaderComponent } from './DASHBOARD-ADMIN/dash-admin-header/dash-admin-header.component';
import { DashboardAdminComponent } from './DASHBOARD-ADMIN/dashboard-admin/dashboard-admin.component';
import { DashAdminAddProfComponent } from './DASHBOARD-ADMIN/gestion-des-profs/dash-admin-add-prof/dash-admin-add-prof.component';
import { DashAdminAddEleveComponent } from './DASHBOARD-ADMIN/gestion-des-eleves/dash-admin-add-eleve/dash-admin-add-eleve.component';
import { DashAdminGetProfsComponent } from './DASHBOARD-ADMIN/gestion-des-profs/dash-admin-get-profs/dash-admin-get-profs.component';
import { DashAdminGestionProfHomeComponent } from './DASHBOARD-ADMIN/gestion-des-profs/dash-admin-gestion-prof-home/dash-admin-gestion-prof-home.component';
import { DashAdminGestionEleveHomeComponent } from './DASHBOARD-ADMIN/gestion-des-eleves/dash-admin-gestion-eleve-home/dash-admin-gestion-eleve-home.component';
import { DashAdminGetElevesComponent } from './DASHBOARD-ADMIN/gestion-des-eleves/dash-admin-get-eleves/dash-admin-get-eleves.component';
import { DashAdminMenuResponsiveComponent } from './DASHBOARD-ADMIN/dash-admin-menu-responsive/dash-admin-menu-responsive.component';
import { DashAdminAddClassRoomComponent } from './DASHBOARD-ADMIN/gestion-des-classrooms/dash-admin-add-class-room/dash-admin-add-class-room.component';
import { DashAdminClassRoomHomeComponent } from './DASHBOARD-ADMIN/gestion-des-classrooms/dash-admin-class-room-home/dash-admin-class-room-home.component';
import { DashAdminClassRoomAssignClassRoomComponent } from './DASHBOARD-ADMIN/gestion-des-classrooms/dash-admin-class-room-assign-class-room/dash-admin-class-room-assign-class-room.component';
import { DashAdminGetClassRoomsComponent } from './DASHBOARD-ADMIN/gestion-des-classrooms/dash-admin-get-class-rooms/dash-admin-get-class-rooms.component';
import { DashAdminInsertAbsenceComponent } from './DASHBOARD-ADMIN/gestion-des-absences/dash-admin-insert-absence/dash-admin-insert-absence.component';
import { DashAdminAbsenceHomeComponent } from './DASHBOARD-ADMIN/gestion-des-absences/dash-admin-absence-home/dash-admin-absence-home.component';
import { DashAdminGetAbsencesComponent } from './DASHBOARD-ADMIN/gestion-des-absences/dash-admin-get-absences/dash-admin-get-absences.component';
import { DashEleveMenuResponsiveComponent } from './DASHBOARD-ELEVE/dash-eleve-menu-responsive/dash-eleve-menu-responsive.component';
import { DashAdminExamsHomeComponent } from './DASHBOARD-ADMIN/gestion-des-exams/dash-admin-exams-home/dash-admin-exams-home.component';
import { DashAdminAddExamsToProfComponent } from './DASHBOARD-ADMIN/gestion-des-exams/dash-admin-add-exams-to-prof/dash-admin-add-exams-to-prof.component';
import { DashProfMenuResponsiveComponent } from './DASHBOARD-PROF/dash-prof-menu-responsive/dash-prof-menu-responsive.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './Services/Guard/Guards/auth.guard';
import { SectionLoginComponent } from './HOME/section-login/section-login.component';
import { DashAdminGetExamsComponent } from './DASHBOARD-ADMIN/gestion-des-exams/dash-admin-get-exams/dash-admin-get-exams.component';
import { LoadingComponent } from './HOME/loading/loading.component';
import { DashAdminUpdateEleveComponent } from './DASHBOARD-ADMIN/gestion-des-eleves/dash-admin-update-eleve/dash-admin-update-eleve.component';
import { DashAdminUpdateProfComponent } from './DASHBOARD-ADMIN/gestion-des-profs/dash-admin-update-prof/dash-admin-update-prof.component';
import { DashAdminChatIAComponent } from './DASHBOARD-ADMIN/dash-admin-chat-ia/dash-admin-chat-ia.component';


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
    DashboardProfElevesHomeComponent,
    DashAdminMenuComponent,
    DashAdminHeaderComponent,
    DashboardAdminComponent,
    DashAdminAddProfComponent,
    DashAdminAddEleveComponent,
    DashAdminGetProfsComponent,
    DashAdminGestionProfHomeComponent,
    DashAdminGestionEleveHomeComponent,
    DashAdminGetElevesComponent,
    DashAdminMenuResponsiveComponent,
    DashAdminAddClassRoomComponent,
    DashAdminClassRoomHomeComponent,
    DashAdminClassRoomAssignClassRoomComponent,
    DashAdminGetClassRoomsComponent,
    DashAdminInsertAbsenceComponent,
    DashAdminAbsenceHomeComponent,
    DashAdminGetAbsencesComponent,
    DashEleveMenuResponsiveComponent,
    DashAdminExamsHomeComponent,
    DashAdminAddExamsToProfComponent,
    DashProfMenuResponsiveComponent,
    SectionLoginComponent,
    DashAdminGetExamsComponent,
    LoadingComponent,
    DashAdminUpdateEleveComponent,
    DashAdminUpdateProfComponent,
    DashAdminChatIAComponent,
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
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorAuth, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
