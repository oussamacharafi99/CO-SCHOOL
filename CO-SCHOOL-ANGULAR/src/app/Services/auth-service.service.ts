import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../Models/person';
import { JwtDto } from '../Models/dto/Jwt';
import { Eleve } from '../Models/eleve';
import { ChangePasswordDto } from '../Models/dto/ChangePasswordDto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  _API_LOGIN = "http://localhost:9091/api/auth/login";
  _API_CHANGE_PASSWORD = "http://localhost:9091/api/auth/change+password"
  _API_GET_ELEVE = "http://localhost:9091/api/eleve/get+eleve+by+id"
  _API_GET_PERSON = "http://localhost:9091/api/auth/get+person"

  login(person : Person):Observable<JwtDto>{
      return this.http.post<JwtDto>(this._API_LOGIN ,person )
  }

  /*-----------------------pour change le  mot de passe-------------------------*/
  changePassword(id : number , passwordDto : ChangePasswordDto):Observable<ChangePasswordDto>{
    return this.http.put<ChangePasswordDto>(this._API_CHANGE_PASSWORD + "/" + id , passwordDto)
  }

  /*-----------------------pour obtenir les informations de l'eleve-------------------------*/
  getEleveById(id : number):Observable<Eleve>{
    return this.http.get<Eleve>(this._API_GET_ELEVE + "/" + id)
  }

  getPersonById(id : number):Observable<Person>{
    return this.http.get<Person>(this._API_GET_PERSON +"/"+id);
  }

  

}
