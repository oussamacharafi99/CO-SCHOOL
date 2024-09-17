import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../Models/examen';
import { insertExamenDto } from '../Models/dto/InsertExamenDto';


@Injectable({
  providedIn: 'root'
})
export class ExmaneService {

    constructor(private http : HttpClient){}

    _API_INSERT_EXAMEN = "http://localhost:9091/api/examen/insert";

    insertExamen(examen : insertExamenDto):Observable<insertExamenDto>{
        return this.http.post<insertExamenDto>(this._API_INSERT_EXAMEN , examen);
    }

}