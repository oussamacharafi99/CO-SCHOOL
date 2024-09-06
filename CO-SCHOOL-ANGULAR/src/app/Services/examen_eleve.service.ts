import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultDto } from '../Models/ResultDto';
import { AvgNote } from '../Models/AvgNote';

@Injectable({
  providedIn: 'root'
})
export class examenEleveService {

  constructor(private http : HttpClient) { }

  _API_RESULT = "http://localhost:9090/api/examen_eleve/result";
  _API_RESULT_AVG = "http://localhost:9090/api/examen_eleve/result/total";

  eleve_result(id : number , semester : string , year : number):Observable<ResultDto[]>{
        return this.http.get<ResultDto[]>(this._API_RESULT + "/" + id + "/" + semester + "/" + year );
  }
  getAvgNote(id : number , semester : string , year : number):Observable<AvgNote>{
    return this.http.get<AvgNote>(this._API_RESULT_AVG + "/" + id + "/" + semester + "/" + year );
}


}
