import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }

  private _API_CHAT_ASK = "http://localhost:9091/api/chat/ask";

  private chatSubject = new Subject<boolean>();

  emitChange(){
    this.chatSubject.next(true);
  }
  getChange(){
    return this.chatSubject.asObservable();
  }

  ask(question: string): Observable<string> {
    return this.http.post(this._API_CHAT_ASK, { question }, { responseType: 'text' }).pipe(tap(()=>{
      this.emitChange();
    }));
  }

}