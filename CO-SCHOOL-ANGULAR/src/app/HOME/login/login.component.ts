import { Person } from '../../Models/person';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../../Models/enums/enum';
import { jwtDecode } from 'jwt-decode';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

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
      this.isLoading = true;
      const person: Person = this.formLogin.value;
      this.authService.login(person).subscribe(
        (res) => {
          localStorage.setItem('jwtData', JSON.stringify(res));

          const decodedToken: any = jwtDecode(res.token);
          console.log('Decoded Token:', decodedToken);

          if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_ADMIN])
          ) {
            this.router.navigateByUrl('dashboard');
          } else if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_ELEVE])
          ) {
            this.router.navigateByUrl('userDash');
          } else if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_PARENT])
          ) {
            this.router.navigateByUrl('technicianDash');
          } else {
            alert('Unauthorized role, please try again!');
            this.router.navigateByUrl('');
          }
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          alert('Username or password is incorrect. Please try again.');
          this.errorMessage = 'Username or password is incorrect.';
          console.log('Login error:', error);
        }
      );
    } else {
      this.errorMessage = 'All fields are required.';
      console.log('Form is invalid.');
    }
    this.valide();
  }
  check: boolean = false;
  onOpenOrClose(check: boolean): void {
    this.check = check;
  }
}
