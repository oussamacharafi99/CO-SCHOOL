import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-admin-menu-responsive',
  templateUrl: './dash-admin-menu-responsive.component.html',
  styleUrls: ['./dash-admin-menu-responsive.component.css']
})
export class DashAdminMenuResponsiveComponent implements OnInit {
  activeLink: string = '/admin-dashboard';

  ngOnInit(): void {
    
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  isFirstLinkActive(): boolean {
    return this.activeLink === '/admin-dashboard'; 
  }
}