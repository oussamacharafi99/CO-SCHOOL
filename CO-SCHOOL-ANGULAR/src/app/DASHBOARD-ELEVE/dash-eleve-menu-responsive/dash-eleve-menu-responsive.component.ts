import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dash-eleve-menu-responsive',
  templateUrl: './dash-eleve-menu-responsive.component.html',
  styleUrls: ['./dash-eleve-menu-responsive.component.css']
})
export class DashEleveMenuResponsiveComponent implements OnInit {
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

  check = false;
  logout(check : boolean) {
    if(check){
      localStorage.removeItem('jwtData');
    this.router.navigateByUrl('');
    }
    else{
      console.log("wa hasan");
    }
    
  }
}

