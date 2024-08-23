import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  _API_LOGIN = "http://localhost:9090/api/auth/login";

  // login():Observable<>{

  // }

}
