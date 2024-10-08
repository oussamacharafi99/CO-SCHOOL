import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ResultDto } from '../Models/ResultDto';
import { AvgNote } from '../Models/AvgNote';
import { ExamenDateDto } from '../Models/dto/ExamenDateDto';
import { ExamenEleveDto } from '../Models/dto/ExamenEleveDto';
import { ClassPersonDto } from '../Models/dto/ClassPersonDto';
import { ExamenEleveNoteDto } from '../Models/dto/ExamenEleveNoteDto';

@Injectable({
  providedIn: 'root'
})
export class examenEleveService {
  private change = new Subject<void>();
  constructor(private http : HttpClient) { }
  
  private _API_RESULT = "http://localhost:9091/api/examen_eleve/result";
  private _API_INSERT_NOTE = "http://localhost:9091/api/examen_eleve/insert_note";
  private _API_RESULT_AVG = "http://localhost:9091/api/examen_eleve/result/total";
  private _API_EXAMEN_DATE = "http://localhost:9091/api/examen_eleve/result/examen+date";
  private _API_GET_ELEVES_BY_EXAMEN_ID = "http://localhost:9091/api/examen_eleve/get+eleve+by+examen+id:";
  private _API_GET_ELEVES_BY_EXAMEN_ID_FOR_UPDATE_NOTES = "http://localhost:9091/api/examen_eleve/get+eleve+for+update+by+id";
  private  _API_GET_EXAM_ELEVE_BY_ELEVEID_AND_PROFID = "http://localhost:9091/api/examen_eleve/get+exams+by+eleve+prof"


   emitChange() {
    this.change.next();
   }
   
   getChanges(): Observable<void> {
    return this.change.asObservable();
   }


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


  getElevesByExamenId(id : number ):Observable<ClassPersonDto[]>{
    return this.http.get<ClassPersonDto[]>(this._API_GET_ELEVES_BY_EXAMEN_ID + "/" + id)
  }

  insertNote(examId :number , eleveId : number , note :  ExamenEleveNoteDto):Observable<ExamenEleveNoteDto>{
    return this.http.put<ExamenEleveNoteDto>(this._API_INSERT_NOTE + "/" + examId + "/" + eleveId , note ).pipe(
      tap(() => this.emitChange())
    )
  }

  getElevesByExamenIdForUpdateNotes(id : number ):Observable<ClassPersonDto[]>{
    return this.http.get<ClassPersonDto[]>(this._API_GET_ELEVES_BY_EXAMEN_ID_FOR_UPDATE_NOTES + "/" + id)
  }

     /*-----------------------pour obtenir les informations de l'eleve par id et prof-------------------------*/
  getExamEleveByIdEleveAndProfId(idE : number , idP : number):Observable<ExamenDateDto[]>{
      return this.http.get<ExamenDateDto[]>(this._API_GET_EXAM_ELEVE_BY_ELEVEID_AND_PROFID + "/" + idE + "/" + idP)
  }

}
