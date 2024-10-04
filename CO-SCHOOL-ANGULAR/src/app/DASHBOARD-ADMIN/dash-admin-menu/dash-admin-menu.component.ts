import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-admin-menu',
  templateUrl: './dash-admin-menu.component.html',
  styleUrls: ['./dash-admin-menu.component.css']
})
export class DashAdminMenuComponent implements OnInit {
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
