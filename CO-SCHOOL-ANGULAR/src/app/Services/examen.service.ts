import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../Models/examen';
import { insertExamenDto } from '../Models/dto/InsertExamenDto';
import { ExamenProfDto } from '../Models/dto/ExamenProfDto';
import { ExamenNameDto } from '../Models/dto/ExamenNameDto';


@Injectable({
  providedIn: 'root'
})
export class ExmaneService {

    constructor(private http : HttpClient){}

   private  _API_INSERT_EXAMEN = "http://localhost:9091/api/examen/insert";
   private  _API_UPDATE_EXAMEN = "http://localhost:9091/api/examen/update+examen";
   private  _API_GET_ALL_EXAMENS_BY_PROF= "http://localhost:9091/api/examen/get+examen+by+prof"
   private  _API_GET_ALL_EXAMENS= "http://localhost:9091/api/examen/get_all"
   private  _API_GET_EXAMEN_BY_ID= "http://localhost:9091/api/examen/get+examen+by+id"
   private  _API_GET_ALL_EXAMENS_INASSIGN= "http://localhost:9091/api/examen/get+examen+inassign"
   private  _API_GET_EXAMENS_WITHOUT_NOTE = "http://localhost:9091/api/examen_eleve/examen+prof+without+note"
   private  _API_GET_EXAMENS_ENCOURE_CORRECTION = "http://localhost:9091/api/examen_eleve/examen+prof+encoure+correction"

    insertExamen(examen : insertExamenDto):Observable<insertExamenDto>{
        return this.http.post<insertExamenDto>(this._API_INSERT_EXAMEN , examen);
    }

    getAllExamens():Observable<Examen[]>{
      return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS)
    }

    getAllExamenWithoutNoteByProf(id : number):Observable<ExamenProfDto[]>{
      return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_WITHOUT_NOTE + "/" + id);
    }

    getAllExamenSEncourCorrByProf(id : number):Observable<ExamenProfDto[]>{
      return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_ENCOURE_CORRECTION + "/" + id);
    }

    getAllExmanesByProfId(id : number):Observable<Examen[]>{
      return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS_BY_PROF + "/" + id)
    }

    getAllExamenInassign(profId : number):Observable<ExamenNameDto[]>{
      return this.http.get<ExamenNameDto[]>(this._API_GET_ALL_EXAMENS_INASSIGN + "/" + profId)
    }

    getExamenById(id : number ):Observable<Examen>{
      return this.http.get<Examen>(this._API_GET_EXAMEN_BY_ID + "/" + id)
    }

   UpdateExamen(id : number, examen : insertExamenDto):Observable<insertExamenDto>{
      return this.http.put<insertExamenDto>(this._API_UPDATE_EXAMEN + "/" +id , examen);
  }

}