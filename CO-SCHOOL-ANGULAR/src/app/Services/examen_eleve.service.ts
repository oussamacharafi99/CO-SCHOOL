import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultDto } from '../Models/ResultDto';
import { AvgNote } from '../Models/AvgNote';
import { ExamenDateDto } from '../Models/dto/ExamenDateDto';

@Injectable({
  providedIn: 'root'
})
export class examenEleveService {

  constructor(private http : HttpClient) { }

  _API_RESULT = "http://localhost:9090/api/examen_eleve/result";
  _API_RESULT_AVG = "http://localhost:9090/api/examen_eleve/result/total";
  _API_EXAMEN_DATE = "http://localhost:9090/api/examen_eleve/result/examen+date";


  /****___________  get Semester Result _____________*****/
  eleve_result(id : number , semester : string , year : number):Observable<ResultDto[]>{
        return this.http.get<ResultDto[]>(this._API_RESULT + "/" + id + "/" + semester + "/" + year );
  }

  /****___________  get Semester Result avg _____________*****/
  getAvgNote(id : number , semester : string , year : number):Observable<AvgNote>{
    return this.http.get<AvgNote>(this._API_RESULT_AVG + "/" + id + "/" + semester + "/" + year );
  }

  /****___________  get Dates Examen _____________*****/
  getExamenDates(id : number):Observable<ExamenDateDto[]>{
    return this.http.get<ExamenDateDto[]>(this._API_EXAMEN_DATE + "/" + id);
  }




}
