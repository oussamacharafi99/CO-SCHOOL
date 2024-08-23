import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../Models/person';
import { JwtDto } from '../Models/dto/Jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  _API_LOGIN = "http://localhost:9090/api/auth/login";

  login(person : Person):Observable<JwtDto>{
      return this.http.post<JwtDto>(this._API_LOGIN ,person )
  }

}
