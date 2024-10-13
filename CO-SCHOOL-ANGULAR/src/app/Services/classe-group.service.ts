import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ClasseProfDto } from '../Models/dto/ClasseProfDto';
import { ClasseNameDto } from '../Models/dto/ClasseNameDto';
import { ClassPersonDto } from '../Models/dto/ClassPersonDto';
import { ClasseGroup } from '../Models/ClasseGroup';



@Injectable({
  providedIn: 'root'
})
export class classeGroupService {

  constructor(private http : HttpClient) { }
  private classeGroupSubject = new Subject<boolean>();

  private _API_PROF_CLASSE = "http://localhost:9091/api/classeGroup/profs+class";
  private _API_CLASSE_BY_PROF_ID = "http://localhost:9091/api/classeGroup/get+class+by+prof+id";
  private _API_ELEVES_BY_PROF_ID = "http://localhost:9091/api/classeGroup/Prof_eleves";
  private _API_GET_ALL_CLASSEGROUP = "http://localhost:9091/api/classeGroup/get+all";
  private _API_ADD_CLASSEGROUP = "http://localhost:9091/api/classeGroup/save"
  private _API_ASSIGN_CLASSEGROUP_TO_PROF = "http://localhost:9091/api/classe+prof/assign"
  private _API_GET_ALL_CLASSE_BY_PROF_ID = "http://localhost:9091/api/classeGroup/get+classe+by+prof+id"


  emitChnages(){
    return this.classeGroupSubject.next(true);
  }

  getChanges():Observable<boolean>{
    return this.classeGroupSubject.asObservable();
  }

  /****___________  get Profs  Classe _____________*****/
  getProfClasseGroup(id : number):Observable<ClasseProfDto[]>{
    return this.http.get<ClasseProfDto[]>(this._API_PROF_CLASSE + "/" + id);
  }

  getClassesNameOfProf(id : number):Observable<ClasseNameDto[]>{
    return this.http.get<ClasseNameDto[]>(this._API_CLASSE_BY_PROF_ID + "/" + id)
  }

  getElevesByProfId(id : number):Observable<ClassPersonDto[]>{
    return this.http.get<ClassPersonDto[]>(this._API_ELEVES_BY_PROF_ID + "/" +id)
  }

  /****___________  get all Classes _____________*****/
  getAllClasseGroup():Observable<ClasseGroup[]>{
    return this.http.get<ClasseGroup[]>(this._API_GET_ALL_CLASSEGROUP)
  }

  insertClasseGroup(classe : ClasseGroup):Observable<string>{
    return this.http.post<string>(this._API_ADD_CLASSEGROUP, classe).pipe(tap(()=>{
      return this.emitChnages();
    }))
  }

  assignClasseToProf(classProf : ClasseProfDto):Observable<string>{
      return this.http.post<string>(this._API_ASSIGN_CLASSEGROUP_TO_PROF ,classProf ).pipe(tap(()=>{
        return this.emitChnages();
      }))
  }

  getAllClasseGroupByProfId(id : number):Observable<ClasseNameDto[]>{
    return this.http.get<ClasseNameDto[]>(this._API_GET_ALL_CLASSE_BY_PROF_ID + "/" +id)
  }


}