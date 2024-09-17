import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasseProfDto } from '../Models/dto/ClasseProfDto';
import { ClasseNameDto } from '../Models/dto/ClasseNameDto';



@Injectable({
  providedIn: 'root'
})
export class classeGroupService {

  constructor(private http : HttpClient) { }

  private _API_PROF_CLASSE = "http://localhost:9091/api/classeGroup/profs+class";
  private _API_CLASSE_BY_PROF_ID = "http://localhost:9091/api/classeGroup/get+class+by+prof+id";


  /****___________  get Profs  Classe _____________*****/
  getProfClasseGroup(id : number):Observable<ClasseProfDto[]>{
    return this.http.get<ClasseProfDto[]>(this._API_PROF_CLASSE + "/" + id);
  }

  getClassesNameOfProf(id : number):Observable<ClasseNameDto[]>{
    return this.http.get<ClasseNameDto[]>(this._API_CLASSE_BY_PROF_ID + "/" + id)
  }

}