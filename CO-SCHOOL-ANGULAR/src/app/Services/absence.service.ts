import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasseProfDto } from '../Models/dto/ClasseProfDto';
import { Absence } from '../Models/absence';



@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

  _API_ABSENCE_ELEVE = "http://localhost:9091/api/absence/get+all+by:";


  /****___________  get Profs  Classe _____________*****/
  getAbsenceEleve(id : number):Observable<Absence[]>{
    return this.http.get<Absence[]>(this._API_ABSENCE_ELEVE + "/" + id);
  }

}