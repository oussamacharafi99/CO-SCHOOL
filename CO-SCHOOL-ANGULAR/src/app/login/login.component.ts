import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const user: User = this.formLogin.value;
      this.authService.login(user).subscribe({
        next: (res: JwtDto) => {
          localStorage.setItem('jwtData', JSON.stringify(res));

          const decodedToken: any = jwtDecode(res.token);
          console.log(decodedToken);

          const userName = decodedToken.name || decodedToken.sub;
          console.log('User Name:', userName);

          if (decodedToken.roles.includes(Role.ROLE_ADMIN)) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/main']);
          }
        },
        error: (err) => {
          alert(this.errorMessage = 'Login failed. try again.');
          console.error('Login error:', err);

        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      console.log('Form is invalid.');
    }
    this.valide()
  }
}
function jwtDecode(token: any): any {
  throw new Error('Function not implemented.');
}

