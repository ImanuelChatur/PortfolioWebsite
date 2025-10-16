import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{
  constructor(private http: HttpClient) {  }

  getQuestionJson():Observable<Quiz>{
    return this.http.get<Quiz>("assets/quizzes/questions.json");
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
