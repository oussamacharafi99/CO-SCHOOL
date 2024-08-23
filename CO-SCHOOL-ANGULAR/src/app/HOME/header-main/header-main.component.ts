import { Component } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent {

  activeLink: string = 'home';

  setActive(link: string) {
    this.activeLink = link;
  }
}
