import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Person } from 'src/app/Models/person';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { jwtDecode } from 'jwt-decode';
import { Role } from 'src/app/Models/enums/enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-eleve-header',
  templateUrl: './dashboard-eleve-header.component.html',
  styleUrls: ['./dashboard-eleve-header.component.css']
})
export class DashboardEleveHeaderComponent implements OnInit {

  username!: string;
  personId!: number;
  role !: string;

  constructor(@Inject(DOCUMENT) private document: Document, private router : Router) { }

  ngOnInit(): void {
    this.getIdPersonFromJwt();
    this.decodeJwtAndSetUserDetails();
  }

  decodeJwtAndSetUserDetails(): void {
    const token = localStorage.getItem('jwtData');
    
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken);

        this.username = decodedToken.sub
        const roles = decodedToken.roles;

        if (roles.includes('ROLE_PROF')) {
          this.role = "PROFESSEUR";
        } else if (roles.includes('ROLE_ADMIN')) {
          this.role = "ADMIN";
        } else if (roles.includes('ROLE_ELEVE')) {
          this.role = "ELEVE";
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } else {
      console.error('No token found in localStorage.');
    }
  }

 
  toggleFullscreen() {
    const elem = this.document.documentElement;

    if (!this.document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      }
    }
  }
  getIdPersonFromJwt() {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
      try {
        const jwtData: JwtDto = JSON.parse(storedJwtData);
        if (jwtData && jwtData.person_id) {
          this.personId = jwtData.person_id;
        } else {
          console.log('Invalid JWT structure');
        }
      } catch (e) {
        console.error('Error parsing JWT:', e);
      }
    } else {
      console.log('No JWT found in localStorage');
    }
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
