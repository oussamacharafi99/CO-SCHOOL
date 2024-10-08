import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamEleveSubjectService {
  
  private examListUpdated = new BehaviorSubject<void>(undefined);

  notifyExamListUpdated() {
    this.examListUpdated.next(); 
  }

  getExamListUpdated() {
    return this.examListUpdated.asObservable();
  }
}
