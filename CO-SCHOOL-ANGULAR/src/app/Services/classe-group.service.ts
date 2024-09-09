import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasseProfDto } from '../Models/dto/ClasseProfDto';



@Injectable({
  providedIn: 'root'
})
export class classeGroupService {

  constructor(private http : HttpClient) { }

  _API_PROF_CLASSE = "http://localhost:9090/api/classeGroup/profs+class";


  /****___________  get Profs  Classe _____________*****/
  getProfClasseGroup(id : number):Observable<ClasseProfDto[]>{
    return this.http.get<ClasseProfDto[]>(this._API_PROF_CLASSE + "/" + id);
  }


}