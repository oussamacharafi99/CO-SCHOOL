import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './DASHBOARD-ELEVE/dashboard/dashboard.component';
import { HomeMainComponent } from './HOME/home-main/home-main.component';
import { DashboardEleveStatisticsComponent } from './DASHBOARD-ELEVE/dashboard-eleve-statistics/dashboard-eleve-statistics.component';
import { DashboardEleveCalendarExamComponent } from './DASHBOARD-ELEVE/dashboard-eleve-calendar-exam/dashboard-eleve-calendar-exam.component';
import { DashboardEleveNotesComponent } from './DASHBOARD-ELEVE/dashboard-eleve-notes/dashboard-eleve-notes.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  {
    path: 'eleve-dashboard', component: DashboardComponent, children: [
      // {path:'',component:DashboardHomeComponent},
      { path: 'statistics', component: DashboardEleveStatisticsComponent },
      { path: 'result', component: DashboardEleveNotesComponent },
      { path: 'calendar', component: DashboardEleveCalendarExamComponent },
    
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
