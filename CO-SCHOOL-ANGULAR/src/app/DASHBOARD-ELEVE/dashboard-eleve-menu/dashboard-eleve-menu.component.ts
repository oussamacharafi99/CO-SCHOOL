import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-eleve-menu',
  templateUrl: './dashboard-eleve-menu.component.html',
  styleUrls: ['./dashboard-eleve-menu.component.css']
})
export class DashboardEleveMenuComponent implements OnInit {
  activeLink: string = '/home';

  ngOnInit(): void {
    
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}

