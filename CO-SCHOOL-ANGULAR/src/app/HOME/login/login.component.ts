import { Person } from '../../Models/person';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../../Models/enums/enum';
import { jwtDecode } from 'jwt-decode';
import { AuthServiceService } from '../../Services/auth-service.service';
import { JwtDto } from 'src/app/Models/dto/Jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  check: boolean = false;
  onOpenOrClose(check: boolean): void {
    this.check = check;
  }
}
