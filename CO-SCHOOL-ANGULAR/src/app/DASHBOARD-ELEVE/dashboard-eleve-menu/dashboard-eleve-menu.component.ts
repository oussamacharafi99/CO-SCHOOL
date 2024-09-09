import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-eleve-menu',
  templateUrl: './dashboard-eleve-menu.component.html',
  styleUrls: ['./dashboard-eleve-menu.component.css']
})
export class DashboardEleveMenuComponent implements OnInit {
  activeLink: string = '/eleve-dashboard'; // Update this default value to match your first link's href

  ngOnInit(): void {
    // Add any initialization logic here
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  isFirstLinkActive(): boolean {
    return this.activeLink === '/eleve-dashboard'; // Match this with the href of the first link
  }
}
