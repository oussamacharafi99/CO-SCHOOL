import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dash-admin-menu-responsive',
  templateUrl: './dash-admin-menu-responsive.component.html',
  styleUrls: ['./dash-admin-menu-responsive.component.css']
})
export class DashAdminMenuResponsiveComponent implements OnInit {
  activeLink: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink(this.router.url);
      }
    });

    
    this.updateActiveLink(this.router.url);
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  updateActiveLink(url: string): void {
    this.activeLink = url;
  }

  
  isLinkActive(link: string): boolean {
    return this.activeLink === link;
  }
}
