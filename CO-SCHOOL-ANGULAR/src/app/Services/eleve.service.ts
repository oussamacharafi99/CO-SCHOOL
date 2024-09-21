import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private _ADD_ELEVE = "http://localhost:9091/api/eleve/add"; 

  constructor(private http: HttpClient) { }
}
