import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Examen } from '../Models/examen';
import { insertExamenDto } from '../Models/dto/InsertExamenDto';
import { ExamenProfDto } from '../Models/dto/ExamenProfDto';
import { ExamenNameDto } from '../Models/dto/ExamenNameDto';
import { Eleve } from '../Models/eleve';
import { ExamenEleveDto } from '../Models/dto/ExamenEleveDto';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

    private examenSubject = new Subject<boolean>();
    constructor(private http : HttpClient){}

    private _API_INSERT_EXAMEN = "http://localhost:9091/api/examen/insert";
    private _API_DELETE_EXAMEN = "http://localhost:9091/api/examen/delete";
    private _API_UPDATE_EXAMEN = "http://localhost:9091/api/examen/update+examen";
    private _API_GET_ALL_EXAMENS_BY_PROF= "http://localhost:9091/api/examen/get+examen+by+prof";
    private _API_GET_ALL_EXAMENS= "http://localhost:9091/api/examen/get_all";
    private _API_GET_ALL_EXAMENS_INASSIGN_BY_PROF_ID= "http://localhost:9091/api/examen/get+examen+inassign+by+prof+id";
    private _API_GET_EXAMEN_BY_ID= "http://localhost:9091/api/examen/get+examen+by+id";
    private _API_GET_ALL_EXAMENSDTO_INASSIGN_BY_PROF_ID= "http://localhost:9091/api/examen/get+examen+inassign";
    private _API_GET_EXAMENS_WITHOUT_NOTE = "http://localhost:9091/api/examen_eleve/examen+prof+without+note";
    private _API_GET_EXAMENS_ENCOURE_CORRECTION = "http://localhost:9091/api/examen_eleve/examen+prof+encoure+correction";
    private _API_GET_EXAMENS_CORRECTION_TERMINER = "http://localhost:9091/api/examen_eleve/examen+prof+correction+terminer";
    private _API_GET_ELEVES_BY_ELEVEID_AND_PROFID = "http://localhost:9091/api/examen_eleve/get+exams+by+eleve+prof";
    private _API_INSERT_EXAMEN_TO_ELEVES = "http://localhost:9091/api/examen_eleve/insert";
    private _API_DELETE_ELEVES_FROM_EXAMEN = "http://localhost:9091/api/examen_eleve/delete";
   
    emitExamenChange() {
        this.examenSubject.next(true);  // Emits `true` when a change is detected
    }

    getExamenChanges(): Observable<boolean> {
        return this.examenSubject.asObservable();  // Returns an Observable<boolean>
    }

    insertExamen(examen: insertExamenDto): Observable<insertExamenDto> {
        return this.http.post<insertExamenDto>(this._API_INSERT_EXAMEN, examen).pipe(
            tap(() => this.emitExamenChange())
        );
    }

    insertElevesToExamen(examenEleveDto: ExamenEleveDto): Observable<string> {
        return this.http.post<string>(this._API_INSERT_EXAMEN_TO_ELEVES, examenEleveDto).pipe(
            tap(() => this.emitExamenChange())
        );
    }

    getAllExamens(): Observable<Examen[]> {
        return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS);
    }

    getAllExamenWithoutNoteByProf(id: number): Observable<ExamenProfDto[]> {
        return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_WITHOUT_NOTE + "/" + id);
    }

    getAllExamenSEncourCorrByProf(id: number): Observable<ExamenProfDto[]> {
        return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_ENCOURE_CORRECTION + "/" + id);
    }

    getAllExmanesByProfId(id: number): Observable<Examen[]> {
        return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS_BY_PROF + "/" + id);
    }

    getAllExamenInassign(profId: number): Observable<ExamenNameDto[]> {
        return this.http.get<ExamenNameDto[]>(this._API_GET_ALL_EXAMENSDTO_INASSIGN_BY_PROF_ID + "/" + profId);
    }

    getAllExamenInassignByProfId(profId: number): Observable<Examen[]> {
        return this.http.get<Examen[]>(this._API_GET_ALL_EXAMENS_INASSIGN_BY_PROF_ID + "/" + profId);
    }

    getExamenById(id: number): Observable<Examen> {
        return this.http.get<Examen>(this._API_GET_EXAMEN_BY_ID + "/" + id);
    }

    updateExamen(id: number, examen: insertExamenDto): Observable<insertExamenDto> {
        return this.http.put<insertExamenDto>(this._API_UPDATE_EXAMEN + "/" + id, examen).pipe(
            tap(() => this.emitExamenChange())
        );
    }

    deleteExamen(id: number): Observable<any> {
        return this.http.delete(this._API_DELETE_EXAMEN + "/" + id).pipe(
            tap(() => this.emitExamenChange())
        );
    }

    getAllExamenCorrectionTerminer(id: number): Observable<ExamenProfDto[]> {
        return this.http.get<ExamenProfDto[]>(this._API_GET_EXAMENS_CORRECTION_TERMINER + "/" + id);
    }

    deleteElevesFromExamen(examenEleveDto: ExamenEleveDto): Observable<any> {
        return this.http.post(this._API_DELETE_ELEVES_FROM_EXAMEN, examenEleveDto).pipe(
            tap(() => this.emitExamenChange())
        );
    }

}
