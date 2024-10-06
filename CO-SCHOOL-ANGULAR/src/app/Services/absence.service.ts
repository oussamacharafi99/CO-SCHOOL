import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../Models/absence';
import { EleveAbsenceDto } from '../../app/Models/dto/EleveAbsenceDto'



@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

 private _API_ABSENCE_ELEVE = "http://localhost:9091/api/absence/get+all+by:";
 private _API_ADD_ABSENCE = "http://localhost:9091/api/absence/insert"
 private _API_GET_ABSENCES_ELEVES_BY_CLASSEGROUP_ID = "http://localhost:9091/api/eleve/get+absences+eleve+by+classe+id"
 private _API_GET_ABSENCES_ELEVES = "http://localhost:9091/api/eleve/get+absences+eleves"



  /****___________  get absence eleve _____________*****/
  getAbsenceEleve(id : number):Observable<Absence[]>{
    return this.http.get<Absence[]>(this._API_ABSENCE_ELEVE + "/" + id);
  }

  /****___________  Insert Absence _____________*****/
  insertAbsence(absence : Absence):Observable<Absence>{
    return this.http.post<Absence>(this._API_ADD_ABSENCE, absence);
  }

  getAllAbsence():Observable<EleveAbsenceDto[]>{
    return this.http.get<EleveAbsenceDto[]>(this._API_GET_ABSENCES_ELEVES)
  }

  getAllAbsencesByClasseId(id : number):Observable<EleveAbsenceDto[]>{
    return this.http.get<EleveAbsenceDto[]>(this._API_GET_ABSENCES_ELEVES_BY_CLASSEGROUP_ID + "/" +id )
  }

}