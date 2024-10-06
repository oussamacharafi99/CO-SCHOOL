import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dash-admin-menu',
  templateUrl: './dash-admin-menu.component.html',
  styleUrls: ['./dash-admin-menu.component.css']
})
export class DashAdminMenuComponent implements OnInit {
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
