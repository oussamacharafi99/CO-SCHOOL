import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamSubjectService {
  
  private examSelectedSubject = new Subject<number>();

  examSelected$ = this.examSelectedSubject.asObservable();

  selectExam(examId: number) {
    this.examSelectedSubject.next(examId);
  }
}
