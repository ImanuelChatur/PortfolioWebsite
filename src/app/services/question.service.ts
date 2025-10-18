import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{
  constructor(private http: HttpClient) {  }

  getQuestionJson(quiz: string):Observable<Quiz>{
    console.log(`RETRIEVING QUESTIONS FROM ${quiz}`);
    return this.http.get<Quiz>(`assets/quizzes/${quiz}.json`);
  }

  getQuizList():Observable<any>{
    return this.http.get<Quiz[]>("assets/quizzes/quizList.json");
  }

}
export interface Question {
  id: number;
  question: string;
  options: string[];
  answer_index: number;
}

export interface Quiz{
  title: string;
  description: string;
  quiz: Question[];
}
