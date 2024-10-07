import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './DASHBOARD-ELEVE/dashboard/dashboard.component';
import { HomeMainComponent } from './HOME/home-main/home-main.component';
import { DashboardEleveStatisticsComponent } from './DASHBOARD-ELEVE/dashboard-eleve-statistics/dashboard-eleve-statistics.component';
import { DashboardEleveCalendarExamComponent } from './DASHBOARD-ELEVE/dashboard-eleve-calendar-exam/dashboard-eleve-calendar-exam.component';
import { DashboardEleveNotesComponent } from './DASHBOARD-ELEVE/dashboard-eleve-notes/dashboard-eleve-notes.component';
import { DashboardEleveHomeComponent } from './DASHBOARD-ELEVE/dashboard-eleve-home/dashboard-eleve-home.component';
import { DashboardProfComponent } from './DASHBOARD-PROF/dashboard-prof/dashboard-prof.component';
import { DashboardProfExamenComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-examen/dashboard-prof-examen.component';
import { DashboardAdminEleveExamenComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-admin-eleve-examen/dashboard-admin-eleve-examen.component';
import { DashboardAdminEncoureCorrectionComponent } from './DASHBOARD-PROF/Home/dashboard-admin-encoure-correction/dashboard-admin-encoure-correction.component';
import { DashboardProfHomeComponent } from './DASHBOARD-PROF/Home/dashboard-prof-home/dashboard-prof-home.component';
import { DashboardProfAddExamenComponent } from './DASHBOARD-PROF/Home/dashboard-prof-add-examen/dashboard-prof-add-examen.component';
import { DashboardProfUpdateExamenComponent } from './DASHBOARD-PROF/Home/dashboard-prof-update-examen/dashboard-prof-update-examen.component';
import { DashboardProfExamensNotesComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-prof-examens-notes/dashboard-prof-examens-notes.component';
import { DashboardAdminExamCorrectionComponent } from './DASHBOARD-PROF/Gestion-des-exames/dashboard-admin-exam-correction/dashboard-admin-exam-correction.component';
import { DashboardProfGestionComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-gestion/dashboard-prof-gestion.component';
import { DashboardProfNoteEleveExamComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-note-eleve-exam/dashboard-prof-note-eleve-exam.component';
import { DashboardProfElevesHomeComponent } from './DASHBOARD-PROF/Gestion-des-eleves/dashboard-prof-eleves-home/dashboard-prof-eleves-home.component';
import { DashboardAdminComponent } from './DASHBOARD-ADMIN/dashboard-admin/dashboard-admin.component';
import { DashAdminGestionEleveHomeComponent } from './DASHBOARD-ADMIN/gestion-des-eleves/dash-admin-gestion-eleve-home/dash-admin-gestion-eleve-home.component';
import { DashAdminGestionProfHomeComponent } from './DASHBOARD-ADMIN/gestion-des-profs/dash-admin-gestion-prof-home/dash-admin-gestion-prof-home.component';
import { DashAdminClassRoomHomeComponent } from './DASHBOARD-ADMIN/gestion-des-classrooms/dash-admin-class-room-home/dash-admin-class-room-home.component';
import { DashAdminAbsenceHomeComponent } from './DASHBOARD-ADMIN/gestion-des-absences/dash-admin-absence-home/dash-admin-absence-home.component';
import { AuthGuard } from './Services/Guard/Guards/auth.guard';
import { Role } from './Models/enums/enum';
import { ErrorMainComponent } from './HOME/error-main/error-main.component';
import { DashboardProfExamenTermineComponent } from './DASHBOARD-PROF/Gestion-des-notes/dashboard-prof-examen-termine/dashboard-prof-examen-termine.component';
import { DashAdminExamsHomeComponent } from './DASHBOARD-ADMIN/gestion-des-exams/dash-admin-exams-home/dash-admin-exams-home.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  
  {
    path: 'eleve-dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard], // Utilisation du guard ici
    data: { role: Role.ROLE_ELEVE }, // Rôle requis pour accéder à cette route
    children: [
      { path: '', component: DashboardEleveHomeComponent },
      { path: 'statistics', component: DashboardEleveStatisticsComponent },
      { path: 'result', component: DashboardEleveNotesComponent },
      { path: 'calendar', component: DashboardEleveCalendarExamComponent },
    ]
  },

  {
    path: 'prof-dashboard',
    component: DashboardProfComponent,
    canActivate: [AuthGuard],
    data: { role: Role.ROLE_PROF }, 
    children: [
      {
        path: '',
        component: DashboardProfHomeComponent,
        children: [
          { path: '', component: DashboardProfAddExamenComponent },
          { path: 'update-examen/:id', component: DashboardProfUpdateExamenComponent },
          { path: 'correction/:id', component: DashboardAdminEleveExamenComponent }
        ]
      },
      {
        path: 'dash-examens',
        component: DashboardProfExamenComponent,
        children: [
          { path: '', component: DashboardProfExamensNotesComponent },
          { path: 'correction/:id', component: DashboardAdminExamCorrectionComponent }
        ]
      },
      {
        path: 'dash-gestion',
        component: DashboardProfGestionComponent,
      },
      { path: 'info-eleves', component: DashboardProfElevesHomeComponent }
    ]
  },

  {
    path: 'admin-dashboard', 
    component: DashboardAdminComponent, 
    canActivate: [AuthGuard],
    data: { role: Role.ROLE_ADMIN }, 
    children: [
      { path: '', component: DashAdminGestionEleveHomeComponent },
      { path: 'gestion-profs', component: DashAdminGestionProfHomeComponent },
      { path: 'classe', component: DashAdminClassRoomHomeComponent },
      { path: 'absence', component: DashAdminAbsenceHomeComponent },
      { path: 'exam', component: DashAdminExamsHomeComponent }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path:'error' , component : ErrorMainComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
