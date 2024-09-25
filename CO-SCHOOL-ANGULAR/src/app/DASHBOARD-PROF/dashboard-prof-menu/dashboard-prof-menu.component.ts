import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-prof-menu',
  templateUrl: './dashboard-prof-menu.component.html',
  styleUrls: ['./dashboard-prof-menu.component.css']
})
export class DashboardProfMenuComponent implements OnInit {
  activeLink: string = '/prof-dashboard'; 

  ngOnInit(): void {
    
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  isFirstLinkActive(): boolean {
    return this.activeLink === '/prof-dashboard'; 
  }
}
