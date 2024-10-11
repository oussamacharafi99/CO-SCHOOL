import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Subject } from 'rxjs';
import { Professeur } from '../Models/professeur';

@Injectable({
    providedIn: 'root'
})
export class ProfService {

    private _ADD_PROF = "http://localhost:9091/api/prof/add";
    private _ADD_GET_ALL_PROFS = "http://localhost:9091/api/prof/get+all";
    private _ADD_GET_ALL_PROFS_CLASSROOM_ID = "http://localhost:9091/api/prof/get+all+class+room";
    private _UPDATE_PROF = "http://localhost:9091/api/prof/update";
    private _GET_PROF_BY_ID = "http://localhost:9091/api/prof/get+prof+by+id";

    constructor(private http: HttpClient) { }

    private profSubject = new Subject<boolean>();

    emitProfChange() {
        this.profSubject.next(true); 
    }

    getExamenChanges(): Observable<boolean> {
        return this.profSubject.asObservable(); 
    }

    

    addProf(prof: Professeur): Observable<string> {
        return this.http.post<string>(this._ADD_PROF, prof).pipe(tap(()=>{
            return this.emitProfChange();
        }));
    }

    getAllProfs():Observable<Professeur[]>{
        return this.http.get<Professeur[]>(this._ADD_GET_ALL_PROFS);
    }

    getAllProfsByClassroomId(id : number):Observable<Professeur[]>{
        return this.http.get<Professeur[]>(this._ADD_GET_ALL_PROFS_CLASSROOM_ID + "/" + id);
    }

      updateEleve(id : number , prof : Professeur ):Observable<string>{
        return this.http.put<string>(this._UPDATE_PROF +"/"+id, prof).pipe(tap(()=>{
            return this.emitProfChange();
        }));
      }
      
      getEleveByID(id : number):Observable<Professeur>{
        return this.http.get<Professeur>(this._GET_PROF_BY_ID + "/" + id)
      }




}
