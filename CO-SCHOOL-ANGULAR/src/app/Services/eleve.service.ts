import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../Models/eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private _ADD_ELEVE = "http://localhost:9091/api/eleve/add"; 
  private _ADD_GET_ALL_ELEVES = "http://localhost:9091/api/eleve/get+all";
  private _ADD_GET_ALL_ELEVES_BY_CLASSGROUP_ID = "http://localhost:9091/api/eleve/get+all";

  constructor(private http: HttpClient) { }

  addEleve(eleve : Eleve):Observable<string>{
    return this.http.post<string>(this._ADD_ELEVE, eleve)
  }

  getAllEleves():Observable<Eleve[]>{
    return this.http.get<Eleve[]>(this._ADD_GET_ALL_ELEVES);
  }

  getAllElevesByClasseGroupId(id : number):Observable<Eleve[]>{
    return this.http.get<Eleve[]>(this._ADD_GET_ALL_ELEVES_BY_CLASSGROUP_ID + "/" + id);
  }

}
