import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './model.question';


@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(private httpClient:HttpClient) { }

  loadQuestions() : Observable<Question[]>{

    return this.httpClient.get<Question[]>("http://localhost:3000/Questions");

  } 
}
