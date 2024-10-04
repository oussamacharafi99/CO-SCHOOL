import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Professeur } from '../Models/professeur';

@Injectable({
    providedIn: 'root'
})
export class ProfService {

    private _ADD_PROF = "http://localhost:9091/api/prof/add";
    private _ADD_GET_ALL_PROFS = "http://localhost:9091/api/prof/get+all";
    private _ADD_GET_ALL_PROFS_CLASSROOM_ID = "http://localhost:9091/api/prof/get+all+class+room";

    constructor(private http: HttpClient) { }

    private _profAdded = new Subject<any>();

    addProf(prof: Professeur): Observable<string> {
        this._profAdded.next(prof);
        return this.http.post<string>(this._ADD_PROF, prof);
    }

    getProfAdded(): Observable<any> {
        return this._profAdded.asObservable();
    }


    getAllProfs():Observable<Professeur[]>{
        return this.http.get<Professeur[]>(this._ADD_GET_ALL_PROFS);
    }

    getAllProfsByClassroomId(id : number):Observable<Professeur[]>{
        return this.http.get<Professeur[]>(this._ADD_GET_ALL_PROFS_CLASSROOM_ID + "/" + id);
    }





}
