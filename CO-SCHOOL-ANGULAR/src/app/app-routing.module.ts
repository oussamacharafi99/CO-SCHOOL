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

const routes: Routes = [
  { path: '', component: HomeMainComponent },

  {
    path: 'eleve-dashboard', component: DashboardComponent, children: [
      { path:'',component:DashboardEleveHomeComponent},
      { path: 'statistics', component: DashboardEleveStatisticsComponent },
      { path: 'result', component: DashboardEleveNotesComponent },
      { path: 'calendar', component: DashboardEleveCalendarExamComponent },
    
  ]},

  {
    path: 'prof-dashboard',
    component: DashboardProfComponent,
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
      }
    ]
  }
  ,



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
