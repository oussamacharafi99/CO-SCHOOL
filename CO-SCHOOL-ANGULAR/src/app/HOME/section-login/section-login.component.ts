import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Role } from 'src/app/Models/enums/enum';
import { Person } from 'src/app/Models/person';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-section-login',
  templateUrl: './section-login.component.html',
  styleUrls: ['./section-login.component.css']
})
export class SectionLoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  personId !: number;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.formLogin.reset();
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const person: Person = this.formLogin.value;
      this.isLoading = true;
      this.authService.login(person).subscribe(
        (res) => {
          localStorage.setItem('jwtData', JSON.stringify(res));
          const decodedToken: any = jwtDecode(res.token);
          console.log('Decoded Token:', decodedToken);
  
          if (decodedToken.roles.includes(Role[Role.ROLE_PROF])) {
            this.router.navigateByUrl('prof-dashboard');
          } else if (decodedToken.roles.includes(Role[Role.ROLE_ELEVE])) {
            this.router.navigateByUrl('eleve-dashboard');
          } else if (decodedToken.roles.includes(Role[Role.ROLE_ADMIN])) {
            this.router.navigateByUrl('admin-dashboard');
          } else {
            this.errorMessage = 'Unauthorized role, please try again!';
          }
          this.isLoading = false;
          this.ngOnInit();
        },
        (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          this.isLoading = false;
        }
      );
    } else {
      this.errorMessage = 'Form is invalid. Please fill out all required fields.';
    }
  }
  
}
