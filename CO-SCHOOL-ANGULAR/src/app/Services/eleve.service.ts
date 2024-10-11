import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Eleve } from '../Models/eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private _ADD_ELEVE = "http://localhost:9091/api/eleve/add"; 
  private _UPDATE_ELEVE = "http://localhost:9091/api/eleve/update";
  private _GET_ELEVE_BY_ID = "http://localhost:9091/api/eleve/get+eleve+by+id";
  private _ADD_GET_ALL_ELEVES = "http://localhost:9091/api/eleve/get+all";
  private _ADD_GET_ALL_ELEVES_BY_CLASSGROUP_ID = "http://localhost:9091/api/eleve/get+all";

  constructor(private http: HttpClient) { }

  private eleveSubject = new Subject<boolean>();

  emitEleveChange(){
    this.eleveSubject.next(true);
  }

  getChangesEleve(){
    return this.eleveSubject.asObservable();
  }

  addEleve(eleve : Eleve):Observable<string>{
    return this.http.post<string>(this._ADD_ELEVE, eleve).pipe(tap(()=>{
      return this.emitEleveChange();
    }))
  }

  getAllEleves():Observable<Eleve[]>{
    return this.http.get<Eleve[]>(this._ADD_GET_ALL_ELEVES);
  }

  getAllElevesByClasseGroupId(id : number):Observable<Eleve[]>{
    return this.http.get<Eleve[]>(this._ADD_GET_ALL_ELEVES_BY_CLASSGROUP_ID + "/" + id);
  }

  updateEleve(id : number , eleve : Eleve ):Observable<string>{
    return this.http.put<string>(this._UPDATE_ELEVE +"/"+id,eleve).pipe(tap(()=>{
      return this.emitEleveChange();
    }));
  }
  
  getEleveByID(id : number):Observable<Eleve>{
    return this.http.get<Eleve>(this._GET_ELEVE_BY_ID + "/" + id)
  }

}
