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
   private  _API_GET_ALL_EXAMENS_BY_PROF= "http://localhost:9091/api/examen/get+examen+by+prof"
   private  _API_GET_ALL_EXAMENS= "http://localhost:9091/api/examen/get_all"
   private  _API_GET_ALL_EXAMENS_INASSIGN= "http://localhost:9091/api/examen/get+examen+inassign"
   private  _API_GET_EXAMENS_WITHOUT_NOTE = "http://localhost:9091/api/examen_eleve/examen+prof+without+note"

    insertExamen(examen : insertExamenDto):Observable<insertExamenDto>{
        return this.http.post<insertExamenDto>(this._API_INSERT_EXAMEN , examen);
    }

    getAllExamens():Observable<Examen[]>{
      return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS)
    }

    getAllExamenWithoutNoteByProf(id : number):Observable<ExamenProfDto[]>{
      return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_WITHOUT_NOTE + "/" + id);
    }

    getAllExmanesByProfId(id : number):Observable<Examen[]>{
      return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS_BY_PROF + "/" + id)
    }

    getAllExamenInassign():Observable<ExamenNameDto[]>{
      return this.http.get<ExamenNameDto[]>(this._API_GET_ALL_EXAMENS_INASSIGN)
    }

}