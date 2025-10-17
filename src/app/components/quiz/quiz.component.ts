import {Component, OnInit} from '@angular/core';
import {Question, QuestionService, Quiz} from './question.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {MatCard, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatCardModule, MatButton],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  providers: [
  ]
})
export class QuizComponent implements OnInit {
  // Declare Variables
  isQuizStarted: boolean = false;
  qIndex: number = 0;
  questions: Question[] = [];
  title: string | undefined;
  desc: string | undefined;
  score: number = 0;

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
  nextQuestion(){
    this.qIndex++;
  }

  answerQuestion(index: number){
    if(this.questions[this.qIndex].answer_index == index){
      this.score++;
    }
  }

}
