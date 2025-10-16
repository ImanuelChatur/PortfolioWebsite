import {Component, OnInit} from '@angular/core';
import {Question, QuestionService, Quiz} from './question.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  providers: [
  ]
})
export class QuizComponent implements OnInit {
  // Declare Variables
  isQuizStarted: boolean = false;
  currentQuestionIndex: number = 0;
  questions: Question[] = [];
  title: string | undefined;
  desc: string | undefined;

  constructor(private questionService: QuestionService) {  }

  ngOnInit(): void {
    this.questionService.getQuestionJson().subscribe({})
    this.loadAllQuestions();
  }

  loadAllQuestions(){
    this.questionService.getQuestionJson().subscribe(res=>{
      this.questions = res.quiz;
      this.title = res.title;
      this.desc = res.description;
      console.log(this.questions);
    })
  }
}
